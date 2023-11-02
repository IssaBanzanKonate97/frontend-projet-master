import { useRef, useState } from "react";
import { InputBlock } from "../../../app_atomic/Input";
import ErrorDisplayer from "../../../app_atomic/Error";
import formRequest from "./form.request";

const PractitionerForm = () => {
    const [formState, setFormState] = useState({
        isLoading: false,
        error: null,
    });

    const lastNameRef = useRef(null);
    const firstNameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneNumberRef = useRef(null);
    const addressRef = useRef(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault(); // Prevents default refresh by the browser on form submit

        setFormState((prevState) => ({
            ...prevState,
            isLoading: true,
            error: null,
        }));

        try {
            const lastName = lastNameRef.current.value;
            const firstName = firstNameRef.current.value;
            const email = emailRef.current.value;
            const phoneNumber = phoneNumberRef.current.value;
            const address = addressRef.current.value;

            await formRequest({
                lastName,
                firstName,
                email,
                phoneNumber,
                address
            });
        } catch (error) {
            setFormState((prevState) => ({
                ...prevState,
                error: `${error}`,
            }));
        } finally {
            setFormState((prevState) => ({
                ...prevState,
                isLoading: false,
            }));
        }
    };

    return <form
        onSubmit={handleFormSubmit}
        className="relative"
    >
        {
            formState.isLoading && <div className="absolute z-10 inset-0 bg-white bg-opacity-50 flex items-center justify-center">
                <div className="w-16 h-16 border-b border-indigo-600 rounded-full animate-spin"></div>
            </div>
        }
        {
            formState.error && <ErrorDisplayer message={formState.error} />
        }
        <div className="grid grid-cols-2 gap-3">
            <div className="col-span-1">
                <InputBlock
                    name="lastName"
                    required
                    label="Nom"
                    type="text"
                    placeholder="Entrez votre nom"
                    error={false}
                    errorMessage={"Une erreur est survenue"}
                    hint=""
                    ref={lastNameRef}
                />
            </div>
            <div className="col-span-1">
                <InputBlock
                    name="firstName"
                    required
                    label="Prénom"
                    type="text"
                    placeholder="Entrez votre prénom"
                    error={false}
                    errorMessage={"Une erreur est survenue"}
                    hint=""
                    ref={firstNameRef}
                />
            </div>
            <div className="col-span-1">
                <InputBlock
                    name="email"
                    required
                    label="Adresse email"
                    type="email"
                    placeholder="my-email@example.com"
                    error={false}
                    errorMessage={"Une erreur est survenue"}
                    hint=""
                    ref={emailRef}
                />
            </div>
            <div className="col-span-1">
                <InputBlock
                    name="phoneNumber"
                    required
                    label="Numéro de téléphone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    error={false}
                    errorMessage={"Une erreur est survenue"}
                    hint=""
                    ref={phoneNumberRef}
                />
            </div>
            <div className="col-span-2">
                <InputBlock
                    name="address"
                    required
                    label="Adresse postale"
                    type="text"
                    placeholder="13 rue de la Paix, 75000 Paris"
                    error={false}
                    errorMessage={"Une erreur est survenue"}
                    hint=""
                    ref={addressRef}
                />
            </div>
        </div>

        <div className="col-span-2 inter py-6 flex items-center justify-end flex-row">
            <input
                type="submit"
                value="Envoyer ma demande"
                className="bg-indigo-500 cursor-pointer hover:bg-indigo-600 text-white py-2.5 px-4 rounded-lg"
            />
        </div>
    </form>
};

export default PractitionerForm;