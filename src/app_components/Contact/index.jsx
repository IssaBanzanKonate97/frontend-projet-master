// Contact.jsx
import Layout from "../Layout";
import React from 'react';
import { Heart, Home, Phone, Users, Mail } from 'react-feather';
import WorkingRemotelyImage from '../../assets/bog.png';
import WorkingRemotelyImage2 from '../../assets/but.png';
import WorkingRemotelyImage3 from '../../assets/borgue.png';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    
    const contactData = { name, email, message };
    console.log('Submitting form', { name, email, message }); 

    try {
      const response = await axios.post('http://localhost:8080/api/contact', contactData);
      if (response.status === 200) {
        
        setName('');
        setEmail('');
        setMessage('');
  
        
        toast.success("Votre message a été envoyé avec succès!");
      }
    } catch (error) {
      console.error('There was an error sending the contact data:', error);
      
      toast.error("Une erreur s'est produite lors de l'envoi du message.");
    }
  };
  return (
    <Layout>
      <div className="max-w-9xl">
        <div className="flex justify-between items-center bg-cyan-500 ">
          <div>
          <h1 className="text-4xl font-semibold mb-5 text-white ml-10">Contactez-us !</h1>
          <p className="text-lg text-white font-medium max-w-xl ml-10">
              Free your future or that of a loved one with the ADIOS method.
              Contact us for more information about our method,
              the sessions' process, scheduling appointments, or any other details.
            </p>
          </div>
          <img src={WorkingRemotelyImage} alt="Working Remotely" className="w-1/1 max-w-xs mr-10"/>
        </div>

        <div className="bg-slate-800 max-w-9xl mx-auto flex justify-start items-center">
              <img src={WorkingRemotelyImage2} alt="Working Remotely" className="w-1/1 max-w-xs mb-4"/>
          <form className=" mt-5 w-1/2" onSubmit={handleSubmit}>
         
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-white-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  className="mt-1 p-3 w-full border rounded-md text-white placeholder-gray-500"
                  placeholder="Votre nom"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email text-black"
                  value={email}
    
                  className="mt-1 p-3 w-full border rounded-md text-white placeholder-black-500"
                  placeholder="Votre adresse e-mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="2"
                  value={message}
                  className="mt-1 p-3 w-full border rounded-md text-white placeholder-black-500"
                  placeholder="Votre message"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              
              <div className="mb-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Send
                </button>
              </div>
            </form>
            <div className="ml-10">
            <div className="flex items-center">
              <Phone className="mr-2" size={30} color="white" strokeWidth={2} />
              <p className="font-semibold text-white">Fron france</p>
            </div>
            <p className="font-semibold text-white ml-10">01 73 20 28 92</p>

            <div className="mt-6 flex items-center">
              <Phone className="mr-2" size={30} color="white" strokeWidth={2} />
              <p className="font-semibold text-white">From abroad</p>
            </div>
            <p className=" font-semibold text-white ml-10">01 73 20 28 92</p>

            <div className="mt-6 flex items-center">
              <Mail className="mr-2" size={30} color="white" strokeWidth={2} />
              <p className="font-semibold text-white">contact@freesession.com</p>
            </div>
            </div>
          </div>

          
        </div>
      
    </Layout>
  );
};

export default Contact;
