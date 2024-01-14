// Contact.jsx
import Layout from "../Layout";
import React from 'react';
import { Heart, Home, Phone, Users, Mail } from 'react-feather';
import WorkingRemotelyImage from '../../assets/lt.png';
import WorkingRemotelyImage2 from '../../assets/tire-removebg-preview.png';
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
      <div className="container mx-auto mt-2 flex flex-col justify-between">
        <div className="flex justify-between items-center mt-2 mb-4">
          <div>
          <h1 className="text-4xl font-semibold mb-5 text-black">Contactez-us !</h1>
          <p className="text-lg text-black font-medium max-w-xl">
              Free your future or that of a loved one with the ADIOS method.
              Contact us for more information about our method,
              the sessions' process, scheduling appointments, or any other details.
            </p>
          </div>
          <img src={WorkingRemotelyImage} alt="Working Remotely" className="max-w-md mt-9"/>
        </div>

        <h1 className="text-3xl font-semibold mb-2 text-black">Send us a message</h1>

        <div className="flex justify-between mt-8">
          <div className="max-w-xl w-full">
          <form className="w-full" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  className="mt-1 p-3 w-full border rounded-md text-black placeholder-gray-500"
                  placeholder="Votre nom"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
    
                  className="mt-1 p-3 w-full border rounded-md text-black placeholder-gray-500"
                  placeholder="Votre adresse e-mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={message}
                  className="mt-1 p-3 w-full border rounded-md text-black placeholder-gray-500"
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
          </div>

          <div className="mr-20 mt-10">
            <div className="mb-4 flex items-center">
              <Phone className="mr-2" size={30} color="black" strokeWidth={2} />
              <p className="font-semibold text-black">Depuis la France</p>
            </div>
            <p className="font-semibold text-black ml-8">01 73 20 28 92</p>

            <div className="mt-6 flex items-center">
              <Phone className="mr-2" size={30} color="black" strokeWidth={2} />
              <p className="font-semibold text-black">Depuis l’étranger</p>
            </div>
            <p className=" font-semibold text-black ml-8">01 73 20 28 92</p>

            <div className="mt-6 flex items-center">
              <Mail className="mr-2" size={30} color="black" strokeWidth={2} />
              <p className="font-semibold text-black">contact@institutadios.com</p>
            </div>
            <div className="mt-10">
              <img src={WorkingRemotelyImage2} alt="Working Remotely" className="max-w-md"/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
