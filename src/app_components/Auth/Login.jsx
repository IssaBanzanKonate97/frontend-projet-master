import { useState, useRef } from 'react';
import { Key, Mail } from 'react-feather';
import { loginUser } from '../../app_contexts/Auth/functions';
import Layout from "../Layout";

const Login = () => {
    const [error, setError] = useState(undefined);
    const id_ref = useRef(null);
    const password_ref = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = id_ref.current.value;
        const password = password_ref.current.value;

        try {
            await loginUser(username, password);
        } catch (err) {
            setError(err.message || 'An error occurred');
        }
    }

    return (
        <Layout>
            <section className='flex justify-center items-center h-screen bg-gray-200'>
                <div className='bg-white border shadow-xl rounded-lg max-w-lg w-full p-5'>
                    <form className='flex flex-col' onSubmit={handleSubmit}>
                        {error && (
                            <div className='bg-red-50 p-2 rounded text-red-500 mb-2'>
                                Erreur : {error}
                            </div>
                        )}

                        <h1 className='text-lg text-center font-bold mb-6'>
                            Se connecter
                        </h1>

                        <div className="flex items-center border-b border-gray-300 mb-4">
                            <Mail className='mx-3 text-gray-400' />
                            <input ref={id_ref} className="w-full border-none focus:outline-none" type="text" name="Identifiant" placeholder="Identifiant" required />
                        </div>

                        <div className="flex items-center border-b border-gray-300 mb-6">
                            <Key className='mx-3 text-gray-400' />
                            <input ref={password_ref} className="w-full border-none focus:outline-none" type="password" name="Password" placeholder="Mot de Passe" required />
                        </div>

                        <input className="bg-blue-500 text-white rounded py-2 cursor-pointer hover:bg-blue-600 transition-colors duration-300" type='submit' value="Se connecter" />

                        <p className='text-center mt-4'>
                            <a href="/register" className='text-blue-500 hover:text-blue-600 transition-colors duration-300'>Je n'ai pas de compte</a>
                        </p>
                    </form>
                </div>
            </section>
        </Layout>
    );
};

export default Login;
