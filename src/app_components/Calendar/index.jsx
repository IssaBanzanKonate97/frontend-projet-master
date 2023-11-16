import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import axios from 'axios';

const Calendar = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [appointmentType, setAppointmentType] = useState('');
  const [practitioner, setPractitioner] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [appointmentTypes, setAppointmentTypes] = useState([]);
  const [practitioners, setPractitioners] = useState([]);
  const [availability, setAvailability] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/bookings', {
        name,
        phone,
        email,
        date,
        time,
        appointmentType,
        practitioner,
      });
      console.log(response.data);
      // Add logic to handle successful booking
    } catch (error) {
      console.error(error);
      // Add logic to handle booking error
    }
  };

  useEffect(() => {
    const fetchAppointmentTypes = async () => {
      try {
        const response = await axios.get('/api/appointment-types');
        setAppointmentTypes(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAppointmentTypes();
  }, []);

  useEffect(() => {
    const fetchPractitioners = async () => {
      try {
        const response = await axios.get('/api/practitioners', {
          params: {
            appointmentType,
          },
        });
        setPractitioners(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (appointmentType) {
      fetchPractitioners();
    }
  }, [appointmentType]);

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const response = await axios.get('/api/availability', {
          params: {
            datetime: date,
            practitioner,
          },
        });
        setAvailability(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (date && practitioner) {
      fetchAvailability();
    }
  }, [date, practitioner]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-100 bg-slate-300">
        <h1 className="inter text-4xl max-w-xl font-bold text-black leading-tight tracking-tighter mb-4">Réservez votre rendez-vous</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Nom complet
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
                Numéro de téléphone
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
              Adresse e-mail
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
              Type de rendez-vous
            </label>
            <select
              id="appointmentType"
              value={appointmentType}
              onChange={(e) => setAppointmentType(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Choisissez un type de rendez-vous</option>
              {appointmentTypes.map((appointmentType) => (
                <option key={appointmentType.id} value={appointmentType.id}>
                  {appointmentType.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="practitioner" className="block text-gray-700 font-bold mb-2">
              Praticien
            </label>
            <select
              id="practitioner"
              value={practitioner}
              onChange={(e) => setPractitioner(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Choisissez un praticien</option>
              {practitioners.map((practitioner) => (
                <option key={practitioner.id} value={practitioner.id}>
                  {practitioner.firstName} {practitioner.lastName}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
              Heure
            </label>
            <select
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Choisissez une heure</option>
              {availability.map((time) => (
                <option key={time.time} value={time.time}>
                  {time.time}
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