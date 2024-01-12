import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedAppointmentType, setSelectedAppointmentType] = useState('');
  const [appointmentTypes, setAppointmentTypes] = useState([]);
  const [practitioners, setPractitioners] = useState([]);
  const [calendars, setCalendars] = useState([]);
  const [selectedCalendar, setSelectedCalendar] = useState('');
  const [selectedPractitioner, setSelectedPractitioner] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!selectedDate) {
        console.error('Veuillez sélectionner une date et une heure pour le rendez-vous.');
        return;
      }

      const response = await axios.post(
        'http://localhost:8080/api/bookings',
        {
          name,
          phone,
          email,
          appointmentType: selectedAppointmentType,
          practitioner: selectedPractitioner,
          calendar: selectedCalendar,
          
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAppointmentTypes = async () => {
    try {
      const response = await axios.get('http://localhost:8080/appointment-types/all');
      setAppointmentTypes(response.data.appointmentTypes);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPractitioners = async () => {
    try {
      const response = await axios.get('http://localhost:8080/practitioners', {
        params: {
          appointmentType: selectedAppointmentType,
        },
      });
      setPractitioners(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCalendars = async () => {
    try {
      const response = await axios.get('http://localhost:8080/calendars/all');
      setCalendars(response.data.calendars);
    } catch (error) {
      console.error(error);
    }
  };

 
  

  const handleAppointmentTypeChange = (newAppointmentType) => {
    setSelectedAppointmentType(newAppointmentType);
    setPractitioners([]);
    fetchPractitioners();
  };

  useEffect(() => {
    fetchAppointmentTypes();
    fetchCalendars();
  }, []);

  useEffect(() => {
    if (selectedAppointmentType) {
      fetchPractitioners();
    }
  }, [selectedAppointmentType]);

  

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-100 bg-slate-300">
        <h1 className="inter text-4xl max-w-xl font-bold text-black leading-tight tracking-tighter mb-4">
          Réservez votre rendez-vous
        </h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Nom et prénom
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
              Mobile
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="appointmentType" className="block text-gray-700 font-bold mb-2">
              Types de rendez-vous
            </label>
            <select
              id="appointmentType"
              value={selectedAppointmentType}
              onChange={(e) => handleAppointmentTypeChange(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Choisissez un praticien</option>
              {appointmentTypes.map((appointmentType) => (
                <option key={appointmentType.id} value={appointmentType.id}>
                  {appointmentType.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="calendar" className="block text-gray-700 font-bold mb-2">
              Calendrier
            </label>
            <select
              id="calendar"
              value={selectedCalendar}
              onChange={(e) => setSelectedCalendar(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Choisissez un calendrier</option>
              {calendars.map((calendar) => (
                <option key={calendar.id} value={calendar.id}>
                  {calendar.name}
                </option>
              ))}
            </select>
          </div>

          

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Réserver
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Calendar;
