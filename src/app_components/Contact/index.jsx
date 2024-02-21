import Layout from "../Layout";
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import WorkingRemotelyImage from '../../assets/bog.png';
import WorkingRemotelyImage2 from '../../assets/but.png';
import WorkingRemotelyImage3 from '../../assets/borgue.png';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    
    const contactData = { name, email, message };
    console.log('Submitting form', contactData); 

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
      <div className="max-w-9xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center bg-cyan-500 p-5">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold mb-5 text-white">Contactez-nous !</h1>
            <p className="text-md md:text-lg text-white font-medium max-w-xl">
              Free your future or that of a loved one with the ADIOS method.
              Contact us for more information about our method,
              the sessions' process, scheduling appointments, or any other details.
            </p>
          </div>
          <img src={WorkingRemotelyImage} alt="Working Remotely" className="w-full max-w-xs mt-4 md:mt-0 md:max-w-md lg:max-w-lg"/>
        </div>

        <div className="bg-slate-800 p-5 flex flex-col md:flex-row justify-start items-center">
          <img src={WorkingRemotelyImage2} alt="Working Remotely" className="w-full max-w-xs mb-4 md:mb-0 md:max-w-md lg:max-w-lg"/>
          <form onSubmit={handleSubmit} className="mt-5 md:mt-0 w-full md:w-1/2 lg:w-2/5 mx-auto md:ml-10">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                className="mt-1 p-3 w-full border rounded-md text-white placeholder-gray-500"
                placeholder="lastname and firstname"
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
                name="email"
                value={email}
                className="mt-1 p-3 w-full border rounded-md text-white placeholder-gray-500"
                placeholder="mail"
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
                rows="4"
                value={message}
                className="mt-1 p-3 w-full border rounded-md text-white placeholder-gray-500"
                placeholder="messages"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="px-4 py-2 bg-[#225886] text-white rounded-md hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </Layout>
  );
};

export default Contact;
