import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('profile');
    // Initialize userData with empty strings to ensure all fields are controlled
    const [userData, setUserData] = useState({
        Lastname: '', 
        Firstname: '',
        Mail: '',
        Mobile: ''
    });

    useEffect(() => {
        // Get the user ID from localStorage
        const userId = JSON.parse(localStorage.getItem('userId'));
        if (userId) {
            axios.get(`http://localhost:4000/api/user/${userId}`)
            .then(response => {
                // Update state with the response or empty strings if undefined
                setUserData({ 
                    Lastname: response.data.last_name || '',
                    Firstname: response.data.first_name || '',
                    Mail: response.data.email || '',
                    Mobile: response.data.phone || ''
                });
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                // Handle error, maybe navigate to login or show a message
            });
        } else {
            // Handle the case where there is no user ID in localStorage
            console.log('No user ID found in localStorage.');
            // Redirect to login or handle accordingly
        }
    }, []);
    

  return (
    
    <div className="max-w-9xl bg-slate-100">
      <div className="bg-slate-100 rounded-lg mt-1 shadow-lg left-0 right-0 z-50">
        <nav className="flex justify-center items-center p-4 border-b">
          <div className="flex space-x-4">
            <button
              className={`text-sm font-semibold ${activeTab === 'profile' ? 'text-[#3BAFBC]' : 'text-black'}`}
              onClick={() => setActiveTab('profile')}
            >
              My profile
            </button>
            <button
              className={`text-sm font-semibold ${activeTab === 'appointments' ? 'text-red-500' : 'text-black'}`}
              onClick={() => setActiveTab('appointments')}
            >
              My appointments
            </button>
            <button
              className={`text-sm font-semibold ${activeTab === 'recommend' ? 'text-red-500' : 'text-black'}`}
              onClick={() => setActiveTab('recommend')}
            >
              My folders
            </button>
          </div>
          <div className="absolute right-4">
            <button
              className="rounded-full border border-gray-300 px-4 py-1 text-sm font-semibold text-black hover:bg-gray-100"
              onClick={() => console.log('Déconnecter')}
            >
              Log out
            </button>
          </div>
        </nav>
      </div>
      <div className="pt-16 flex justify-center">
        {activeTab === 'profile' && <ProfilePage userData={userData} />}
      </div>
    </div>
  );
};



const ProfilePage = ({ userData }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">My profile</h1>
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Les champs de formulaire vont ici */}
          
          <div className="col-span-2 sm:col-span-1">
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Lastname</label>
        <input id="last_name" type="text" value={userData.Lastname} readOnly className="text-black mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none" />
        </div>
        <div className="col-span-2 sm:col-span-1">
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Firstname</label>
        <input id="first_name" type="text" value={userData.Firstname} readOnly className="text-black mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none" />
        </div>
        <div className="col-span-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Mail</label>
        <input id="email" type="email" value={userData.Mail} readOnly className="text-black mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none" />
        </div>
        <div className="col-span-2">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Mobile</label>
        <input id="phone" type="tel" value={userData.Mobile} readOnly className="text-black mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none" />
        </div>

        </div>
        <div className="flex justify-end">
          <button className="px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#3BAFBC] hover:bg-[#3BAFBC] focus:outline-none focus:ring focus:ring-red-200 active:bg-red-700 transition ease-in-out duration-150">
            Save
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          Ces données sont confidentielles et destinées aux praticiens
        </p>
      </div>
      
    );
  };
  ProfilePage.propTypes = {
    userData: PropTypes.shape({
        Lastname: PropTypes.string,
        Firstname: PropTypes.string,
        Mail: PropTypes.string,
        Mobile: PropTypes.string
    })


};

export default Profile;