import React, { useState, useRef } from 'react';
import { Key, Mail } from 'react-feather';
import Layout from "../Layout";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 



// La fonction login pour envoyer les données de connexion à l'API
const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:4000/login', { email, password });
      console.log(response.data); // This will show you the actual structure of the response
  
      // Save the user ID from the response to localStorage
      if (response.data && response.data.userId) {
        localStorage.setItem('userId', response.data.userId.toString()); // Assuming the userId is what you need to fetch user details
        return response.data.userId; // You can return the userId or the entire response depending on your needs
      } else {
        throw new Error('User ID not found in response');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      throw error; // Rethrow the error so it can be handled by the caller
    }
  };
  
  
  

  const Login = () => {
    const [error, setError] = useState(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate(); // Créez l'instance navigate
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
    
      try {
        const userData = await login(email, password);
        console.log(userData);
        navigate('/Calendar'); // Utilisez navigate pour rediriger vers le tableau de bord
      } catch (error) {
        setError(error.toString());
      }
    };
      

    return (
        <Layout>
            <section className='flex justify-center items-center h-screen bg-[#225886]'>
                <div className='bg-white border shadow-xl rounded-lg max-w-lg w-full p-5'>
                    <form className='flex flex-col' onSubmit={handleSubmit}>
                        {error && (
                            <div className='bg-red-50 p-2 rounded text-red-500 mb-2'>
                                Erreur : {error}
                            </div>
                        )}
                        <h1 className='text-lg text-center font-bold mb-6'>Se connecter</h1>
                        <div className="flex items-center border-b border-black mb-4">
                            <Mail className='mx-3 text-black' />
                            <input ref={emailRef} className="w-full border-none focus:outline-none text-black" type="email" placeholder="Email" required />
                        </div>
                        <div className="flex items-center border-b border-black mb-6">
                            <Key className='mx-3 text-black' />
                            <input ref={passwordRef} className="w-full border-none focus:outline-none text-black" type="password" placeholder="Mot de Passe" required />
                        </div>
                        <input className="bg-[#225886] text-white rounded py-2 cursor-pointer hover:bg-[#225886] transition-colors duration-300" type='submit' value="Se connecter" />
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