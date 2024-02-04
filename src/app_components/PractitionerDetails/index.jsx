/* eslint-disable react-refresh/only-export-components */
import { useParams } from 'react-router-dom';
// import logo from '../../assets/logo.png';
// import profilePicture from '../../assets/thumbnail.jpeg';
import { useEffect } from 'react';
import PresentationHeader from './components/PresentationHeader';
import { useState } from 'react';
import Header from '../../shared/components/Header';
import NavigationLinks from './components/NavigationLinks';
import DetailsCard from './components/DetailsCard';
import { AlignLeft, Clock } from 'react-feather';
import usePractitionerService from '../../app_hooks/usePractitionerService';
import { PractitionerProvider } from '../../app_contexts/Practitioner';
import Loading from '../Loading/Loading';
import { Heart, Home, Phone, Users } from 'react-feather';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';



const PraticionerDetails = () => {


  const [selectedAppointmentType, setSelectedAppointmentType] = useState('');
  const [appointmentTypes, setAppointmentTypes] = useState([]);
  const [calendars, setCalendars] = useState([]);
  const [selectedCalendar, setSelectedCalendar] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Selected Appointment Type ID:", selectedAppointmentType);
    console.log("Selected calendar:", selectedCalendar);
    console.log("Selected date:", selectedDate);
    console.log("Selected time:", selectedTime);
    console.log("Submitting form");
    try {
      if (!selectedDate || !selectedTime || !selectedAppointmentType) {
        console.error('Veuillez sélectionner une date, une heure et un type de rendez-vous pour le rendez-vous.');
        return;
      }

      if (!(selectedDate instanceof Date)) {
        console.error('La date sélectionnée est invalide.');
        return;
      }


      const formatDate = (date) => {
        if (!(date instanceof Date)) return '';

        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');

        return `${year}-${month}-${day}`;
      };
      const formattedDate = formatDate(selectedDate);
      console.log('Formatdate', formattedDate);



      const response = await axios.post(
        'http://localhost:4000/api/book-appointment',
        {
          firstName,
          lastName,
          email,
          phone,
          password,
          appointmentTypeID: selectedAppointmentType,
          calendar: selectedCalendar,
          date: formattedDate,
          time: selectedTime,
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



  const handleDateChange = (date) => {
    console.log('issa')
    console.log(date)
    setSelectedDate(date);
    fetchAvailableTimes(date);
  };


  const fetchAppointmentTypes = async () => {
    try {
      const response = await axios.get('http://localhost:4000/appointment-types/all');
      const specificAppointmentType = response.data.filter(appointmentType => appointmentType.id === 23715014);
      setAppointmentTypes(specificAppointmentType);

      if (specificAppointmentType.length > 0) {
        setSelectedAppointmentType(specificAppointmentType[0].id);
      }
    } catch (error) {
      console.error(error);
    }
  };


  const handleAppointmentTypeChange = (e) => {
    const appointmentTypeId = e.target.value;

    setSelectedAppointmentType(appointmentTypeId);
  };

  useEffect(() => {
    console.log(`Le type de rendez-vous sélectionné est: ${selectedAppointmentType}`);
  }, [selectedAppointmentType]);




  const fetchCalendars = async () => {
    try {
      const response = await axios.get('http://localhost:4000/calendars/all');
      const filteredData = response.data.calendars.map(calendar => ({
        id: calendar.id,
        name: calendar.name,
        appointmentTypes: calendar.appointmentTypes
      }));
      setCalendars(filteredData);
    } catch (error) {
      console.error(error);
    }
  };



  const fetchAvailableDates = async () => {
    const appointmentTypeID = 23715014;
    const calendarID = 8758616;
    let allAvailableSlots = [];

    try {
      const currentYear = new Date().getFullYear();

      for (let month = 1; month <= 12; month++) {
        const monthFormatted = `${currentYear}-${month.toString().padStart(2, '0')}`;

        const response = await axios.get('http://localhost:4000/fetch_appointment_dates', {
          params: {
            appointmentTypeID: appointmentTypeID,
            month: monthFormatted,
            calendarID: calendarID
          }
        });

        const dates = response.data.map(dateObj => {
          const dateUTC = new Date(dateObj.date);
          // Conversion de UTC à l'heure locale
          const dateLocal = new Date(dateUTC.getTime() + dateUTC.getTimezoneOffset() * 60000);
          return dateLocal;
        });

        allAvailableSlots = [...allAvailableSlots, ...dates];
      }

      setAvailableSlots(allAvailableSlots);
    } catch (error) {
      console.error('Erreur lors de la récupération des dates disponibles :', error);
      setAvailableSlots([]);
    }
  };

  useEffect(() => {
    fetchAvailableDates();
  }, [selectedAppointmentType, selectedCalendar]);





  const fetchAvailableTimes = async (date) => {
    const parisDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
      .toISOString()
      .replace(/T.*$/, '');
    console.log('parisDate', parisDate)

    try {
      const response = await axios.get('http://localhost:4000/fetch_appointment_times', {
        params: {
          appointmentTypeID: selectedAppointmentType,
          calendarID: selectedCalendar,
          date: parisDate, // j'utilise la date formatée pour le fuseau horaire de Paris
        },
      });
      // Conversion des horaires en format HH:mm
      const timesInParis = response.data.map((timeSlot) => {
        // Création d'une date JavaScript avec la date et l'heure
        let dateTime = new Date(timeSlot.time);
        // Les heure locale (GMT+1 pour Paris)
        let timeString = dateTime.toLocaleTimeString('fr-FR', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Europe/Paris'
        });
        return { ...timeSlot, time: timeString };
      });
      setAvailableTimes(timesInParis);
    } catch (error) {
      console.error('Error fetching available times:', error);
      setAvailableTimes([]);
    }
  };



  useEffect(() => {
    fetchAppointmentTypes();
    fetchCalendars();
  }, []);

  const service = usePractitionerService();

  const [practitioner, setPractitioner] = useState(undefined);

  useEffect(() => {
    const get = async () => {
      const resovedPractitioner = await service.getPractionerDetails(id);
      setPractitioner(resovedPractitioner);
    };

    get();
  }, [service, id]);

  const [showInput, setShowInput] = useState(false);

  return (
    practitioner === undefined ? <Loading /> :
      <div className='bg-slate-100 h-screen w-screen overflow-y-auto'>
        <Header />
        <PresentationHeader practitioner={practitioner} />
        <NavigationLinks />
        <section className='flex gap-4 max-w-7xl py-4 px-0.5 mx-auto'>
          <div className="flex flex-col gap-3">
            <DetailsCard id="#presentation" icon={<AlignLeft className='w-4 h-4 text-cyan-600' />} title="Présentation">
              <p className="text-slate-600 text-sm mb-2 inter">{practitioner.description}</p>
            </DetailsCard>

            <DetailsCard id="#openings_hours" icon={<Clock className='w-4 h-4 text-cyan-600' />} title="Horaires & contact">
              <div className='grid grid-cols-2 gap-8'>
                <div>
                  <h5 className="text-slate-700 font-bold text-sm mb-2">Hours</h5>
                  <p className="text-slate-600 text-sm mb-2 inter">{practitioner.openingHours}</p>
                </div>

                <div>
                  <h5 className="text-slate-700 font-bold text-sm mb-2">Contact</h5>
                  <p className="text-slate-600 text-sm mb-2 inter">{practitioner.contact}</p>
                </div>
              </div>
            </DetailsCard>
          </div>

          <DetailsCard title="In summary ">
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <Heart className="w-4 h-4 text-cyan-600 mr-2" />
                <p className="text-slate-600 text-sm mb-2 inter">Accepts new patients on  Free session</p>
              </div>

              <div className="flex items-center">
                <Home className="w-4 h-4 text-cyan-600 mr-2" />
                <p className="text-slate-600 text-sm mb-2 inter">Au Millenium<br />390 Avenue des Abrivados, 34400 Lunel</p>
              </div>

              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowInput(!showInput)}>Book an Appointment</button>

              {showInput && appointmentTypes.length > 0 && (
                <select
                  id="appointmentType"
                  value={selectedAppointmentType}
                  onChange={(e) => handleAppointmentTypeChange(e.target.value)}
                  required
                >
                  <option value="" disabled>Choose appointment type</option>
                  {appointmentTypes.map((type) => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                  ))}
                </select>
              )}


              {selectedAppointmentType && showInput && (

                <select id="calendar" value={selectedCalendar} onChange={(e) => setSelectedCalendar(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                  <option value="" disabled>Choose calendar</option>
                  {
                    calendars.map((calendar) => (
                      <option key={calendar.id} value={calendar.id}>
                        {calendar.name}
                      </option>
                    ))
                  }
                </select>
              )}



              {showInput && selectedCalendar && (
                <div className="flex space-x-4">
                  <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    tileDisabled={({ date, view }) =>
                      view === 'month' && !availableSlots.some(availableDate =>
                        availableDate.toISOString().slice(0, 10) === date.toISOString().slice(0, 10))
                    }
                    className="react-calendar"
                  />
                  {selectedDate && availableTimes.length > 0 && (
                    <div className="flex flex-col bg-white shadow rounded-md overflow-hidden">
                      <div className="overflow-y-auto" style={{ maxHeight: '200px' }}>
                        {availableTimes.map((timeSlot, index) => {
                          //timeSlot.time au format HH:mm
                          return (
                            <label key={index} className="flex items-center border-b last:border-b-0 px-4 py-2 cursor-pointer">
                              <input
                                type="radio"
                                name="time"
                                value={timeSlot.time}
                                className="form-radio text-blue-600"
                                onChange={() => setSelectedTime(timeSlot.time)}
                              />

                              <span className="ml-2 text-sm text-gray-700">{timeSlot.time}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {selectedTime && (
                <div className="mt-4">
                  <div className="flex flex-col space-y-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name *</label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}

                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name *</label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}

                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                      />

                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Téléphone *</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}

                      />

                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password *</label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full"
                      onClick={handleSubmit}
                    >
                      Take Appointment
                    </button>

                  </div>

                </div>

              )}

            </div>
          </DetailsCard>
        </section>
      </div>
  );
};

export default function index() {
  return <PractitionerProvider>
    <PraticionerDetails />
  </PractitionerProvider>
}