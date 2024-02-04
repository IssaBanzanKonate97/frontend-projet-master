import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [userData, setUserData] = useState({
    Lastname: '',
    Firstname: '',
    Mail: '',
    Mobile: ''
  });
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const acuityUserId = JSON.parse(localStorage.getItem('acuityUserId'));
    if (acuityUserId) {
      axios.get(`http://localhost:4000/api/user/${acuityUserId}`)
        .then(response => {
          setUserData({
            Lastname: response.data.last_name || '',
            Firstname: response.data.first_name || '',
            Mail: response.data.email || '',
            Mobile: response.data.phone || ''
          });
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []);

  useEffect(() => {
    const acuityUserId = JSON.parse(localStorage.getItem('acuityUserId'));
    if (acuityUserId) {

      axios.get(`http://localhost:4000/api/appointments/user/${acuityUserId}`)
        .then(response => {
          setAppointments(response.data);
        })
        .catch(error => {
          console.error('Error fetching appointments:', error);
        });
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
        {activeTab === 'profile' && <ProfilePage userData={userData} setUserData={setUserData} />}
        {activeTab === 'appointments' && <Appointments appointments={appointments} />}
      </div>
    </div>
  );
};



const ProfilePage = ({ userData, setUserData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const acuityUserId = JSON.parse(localStorage.getItem('acuityUserId'));

    try {
      const response = await axios.put(`http://localhost:4000/api/user/${acuityUserId}`, {
        Lastname: userData.Lastname,
        Firstname: userData.Firstname,
        Mail: userData.Mail,
        Mobile: userData.Mobile
      });
      console.log('Mise à jour réussie:', response.data);
      setUserData({ ...userData });
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">My profile</h1>
        <div className="grid grid-cols-2 gap-6 mb-6">


          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Lastname</label>
            <input name="Lastname" type="text" value={userData.Lastname} onChange={handleInputChange} className="text-black mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none" />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Firstname</label>
            <input name="Firstname" type="text" value={userData.Firstname} onChange={handleInputChange} className="text-black mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none" />
          </div>
          <div className="col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Mail</label>
            <input name="Mail" type="email" value={userData.Mail} onChange={handleInputChange} className="text-black mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none" />
          </div>
          <div className="col-span-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Mobile</label>
            <input name="Mobile" type="tel" value={userData.Mobile} onChange={handleInputChange} className="text-black mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none" />
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
    </form>
  );
};

ProfilePage.propTypes = {
  userData: PropTypes.shape({
    Lastname: PropTypes.string,
    Firstname: PropTypes.string,
    Mail: PropTypes.string,
    Mobile: PropTypes.string
  }),
  setUserData: PropTypes.func.isRequired
};



const Appointments = ({ appointments }) => {

  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleDateChange = (e) => {
    setNewDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setNewTime(e.target.value);
  };

  const handleAppointmentSelection = (appointment) => {
    setSelectedAppointment(appointment);
    setNewDate(appointment.date);
    setNewTime(appointment.time);
  };

  const rescheduleAppointment = async () => {
    const testAppointmentId = '1199896419';
    if (selectedAppointment) {
      try {
        const response = await axios.put(`http://localhost:4000/api/appointments/${testAppointmentId}/reschedule`, {
          newDate,
          newTime
        });
        console.log('Rendez-vous reprogrammé avec succès:', response.data);

      } catch (error) {
        console.error('Erreur lors de la reprogrammation du rendez-vous:', error);

      }
    }
  };


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formatTime = (timeString) => {
    const time = new Date('1970-01-01T' + timeString + 'Z');
    return time.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  if (!appointments || appointments.length === 0) {
    return <p>Aucun rendez-vous à afficher.</p>;
  }

  return (
    <div className="flex justify-start -mx-2">
      <div className="w-full md:w-1/3 px-2 mb-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="mb-4">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold text-blue-500 mb-2">Mes rendez-vous</h2>
              <div className="border-t border-blue-200 pt-2">
                <p className="text-sm text-gray-600">
                  {formatDate(appointment.date)} à {formatTime(appointment.time)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full md:w-1/3 px-2 mb-4">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold text-blue-500 mb-2">Déplacer mon Rendez-vous</h2>
          <div className="border-t border-blue-200 pt-2">
            <select
              className="mb-4 w-full text-black"
              onChange={(e) => handleAppointmentSelection(JSON.parse(e.target.value))}
              value={selectedAppointment ? JSON.stringify(selectedAppointment) : ''}
            >
              <option value=''>Sélectionner un rendez-vous</option>
              {appointments.map((appointment) => (
                <option key={appointment.id} value={JSON.stringify(appointment)}>
                  {formatDate(appointment.date)} à {formatTime(appointment.time)}
                </option>
              ))}
            </select>
            {selectedAppointment && (
              <>
                <input type="date" value={newDate} onChange={handleDateChange} className="mb-4 w-full text-black" />
                <input type="time" value={newTime} onChange={handleTimeChange} className="mb-4 w-full text-black" />
                <button
                  className="bg-blue-500 text-black rounded px-2 py-1"
                  onClick={rescheduleAppointment}
                >
                  Confirmer le changement
                </button>
              </>
            )}
          </div>
        </div>
      </div>


      <div className="w-full md:w-1/3 px-2 mb-4">

        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h2 className="text-lg font-semibold text-blue-500 mb-2">Annuler un Rendez-vous</h2>

        </div>


      </div>
    </div>
  );

};

Appointments.propTypes = {
  appointments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,

  })).isRequired
};


export default Profile;