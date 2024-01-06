// Contact.jsx
import Layout from "../Layout";
import React from 'react';
import { Heart, Home, Phone, Users, Mail } from 'react-feather';
import WorkingRemotelyImage from '../../assets/lt.png';

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto mt-2 flex flex-col justify-between">
        <div className="flex justify-between items-center mt-2 mb-4">
          <div>
          <h1 className="text-4xl font-semibold mb-5 text-black">Contactez-nous !</h1>
          <p className="text-lg text-black font-medium max-w-xl">
              Libérez votre avenir ou celui d’un proche grâce à la méthode ADIOS. 
              Prenez contact pour plus d’informations sur notre méthode, 
              le déroulement des séances, la prise de rendez-vous ou toutes autres informations.
            </p>
          </div>
          <img src={WorkingRemotelyImage} alt="Working Remotely" className="max-w-md"/>
        </div>

        <h1 className="text-3xl font-semibold mb-2 text-black">Envoyez nous un message</h1>

        <div className="flex justify-between mt-8">
          <div className="max-w-xl w-full">
            <form className="w-full">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-3 w-full border rounded-md"
                  placeholder="Votre nom"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-3 w-full border rounded-md"
                  placeholder="Votre adresse e-mail"
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
                  className="mt-1 p-3 w-full border rounded-md"
                  placeholder="Votre message"
                ></textarea>
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>

          <div className="ml-1 mt-10">
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
