import './index.css'
import { useState, useRef } from 'react';
import logo from '../../assets/application_logo.jpg';
import { Key, Mail } from 'react-feather';
import { loginUser } from '../../app_contexts/Auth/functions';

const Login = () => {
    const [error, setError] = useState(undefined);

    const id_ref = useRef(null);

    const password_ref = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = id_ref.current.value;
        const password = password_ref.current.value;

        await loginUser(username, password)
    }

    return <section className='w-full bg-gray-200 fixed inset-0'>
        <div className='bg-white border shadow-xl rounded-lg w-full max-w-lg mx-auto mt-16 p-5'>
            <form className='flex flex-col justify-center' onSubmit={(e) => { handleSubmit(e) }}>
                <div className="mx-auto mb-6">
                    <img src={logo} className="h-20 w-20 rounded-full" />
                </div>

                {error && <div className='bg-red-50 p-2 rounded text-red-500 mb-2'>
                    Erreur : {error}
                </div>}

                <h1 className='text-lg text-center font-bold mb-2'>
                    Se connecter
                </h1>

                <div className="wrap-input100 validate-input">
                    <input ref={id_ref} className="input100" type="text" name="Identifiant" placeholder="Identifiant" required />
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                        <Mail className='h-4 w-4' />
                    </span>
                </div>

                <div className="wrap-input100 validate-input">
                    <input ref={password_ref} className="input100" type="password" name="Password" placeholder="Mot de Passe" required />


                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                        <Key className='h-4 w-4' />
                    </span>
                </div>

                <div className="container-login100-form-btn">


                    <input className="login100-form-btn" type='submit' value="Se connecter" />

                </div>
                <div class='inscription'>
                    <a href="p">je n'ai pas de compte</a>
                </div>
                <div className="text-center p-t-136 Accueil">

                </div>
            </form>
        </div>
    </section>
};

export default Login;