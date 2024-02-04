import React, { useState, useRef } from 'react';
import { Key, Mail } from 'react-feather';
import Layout from "../Layout";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const login = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:4000/login', { email, password });
    console.log("login response");
    console.log(response.data);


    if (response.data && response.data.acuityUserId) {
      localStorage.setItem('acuityUserId', response.data.acuityUserId.toString());
      return response.data.acuityUserId;
    } else {
      throw new Error('User ID not found in response');
    }
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    throw error;
  }
};




const Login = () => {
  const [error, setError] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const userData = await login(email, password);
      console.log(userData);
      navigate('/Calendar');
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

            <div className="flex items-center border-b border-black mb-4">
              <Mail className='mx-3 text-black' />
              <input ref={emailRef} className="w-full border-none focus:outline-none text-black" type="email" placeholder="Mail" required />
            </div>
            <div className="flex items-center border-b border-black mb-6">
              <Key className='mx-3 text-black' />
              <input ref={passwordRef} className="w-full border-none focus:outline-none text-black" type="password" placeholder="Password" required />
            </div>
            <input className="bg-[#225886] text-white rounded py-2 cursor-pointer hover:bg-[#225886] transition-colors duration-300" type='submit' value="Log in" />
            <p className='text-center mt-4'>
              <a href="/register" className='text-blue-500 hover:text-blue-600 transition-colors duration-300'>Register</a>
            </p>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Login;