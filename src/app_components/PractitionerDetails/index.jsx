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
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedAppointmentType, setSelectedAppointmentType] = useState('');
  const [appointmentTypes, setAppointmentTypes] = useState([]);
  const [practitioners, setPractitioners] = useState([]);
  const [calendars, setCalendars] = useState([]);

  const [selectedPractitioner, setSelectedPractitioner] = useState('');
  
  const [selectedCalendar, setSelectedCalendar] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  
 

  const { id } = useParams();
  

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
          date: selectedDate.toISOString().split('T')[0],
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

  /*const fetchAvailableSlots = async (calendarId, selectedDate) => {
    if (calendarId && selectedDate) {
      try {
        // Formater selectedDate au format ISO 8601 (YYYY-MM-DD)
        const formattedDate = selectedDate.toISOString().split('T')[0];
  
        const response = await axios.get('http://localhost:8080/availability', {
          params: {
            appointmentTypeID: calendarId, // Assurez-vous que le nom correspond à celui attendu par le back-end
            datetime: formattedDate, // Vous devez passer la date sélectionnée
          },
        });
        
        setAvailableSlots(response.data.data); // Assurez-vous que c'est le bon chemin dans la réponse
      } catch (error) {
        console.error('Error fetching available dates:', error);
        setAvailableSlots([]);
      }
    }
  };*/
  
  
  const handleDateChange = date => {
  
    const isDateAvailable = availableSlots.some(availableDate => 
      availableDate.getDate() === date.getDate() &&
      availableDate.getMonth() === date.getMonth() &&
      availableDate.getFullYear() === date.getFullYear());
    
    if (isDateAvailable) {
      setSelectedDate(date);
    } else {
      alert("Cette date n'est pas disponible. Veuillez en sélectionner une autre.");
    }
  };
  
  

  
  
  const fetchAppointmentTypes = async () => {
    try {
      const response = await axios.get('http://localhost:8080/appointment-types/all');
      //setAppointmentTypes(response.data.appointmentTypes);
      setAppointmentTypes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPractitioners = async () => {
    console.log(`Appointement type selected : ${selectedAppointmentType}`);
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

  
  const fetchAvailableDates = async () => {
    const appointmentTypeID = 23715014; 
    const calendarID = 8758616;   
    let allAvailableSlots = []; 
  
    try {
      // Boucle sur chaque mois de l'année
      for (let month = 1; month <= 12; month++) {
        // Formatage du mois au format 'YYYY-MM'
        const monthFormatted = `2024-${month.toString().padStart(2, '0')}`;
  
        // Appel à l'API pour chaque mois
        const response = await axios.get('http://localhost:8080/fetch_appointment_dates', {
          params: {
            appointmentTypeID: appointmentTypeID,
            month: monthFormatted,
            calendarID: calendarID
          }
        });
  
       
        const dates = response.data.map(dateObj => new Date(dateObj.date));
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
  
  
  

  
    
  
  const handleAppointmentTypeChange = (newAppointmentType) => {
    setSelectedAppointmentType(newAppointmentType);
    setPractitioners([]);
    fetchPractitioners();
    console.log(`handleAppointmentTypeChange()\nnewAppointmentType : ${newAppointmentType}`);
  };

  useEffect(() => {
    fetchAppointmentTypes();
    fetchCalendars();
  }, []);

  /*useEffect(() => {
    if (selectedCalendar) {
      fetchAvailableSlots(selectedCalendar);
    }
  }, [selectedCalendar]);*/
  
  useEffect(() => {
    if (selectedAppointmentType) {
      fetchPractitioners();
    }
  }, [selectedAppointmentType]);

  const service = usePractitionerService();

  const [practitioner, setPractitioner] = useState(undefined);

  useEffect(() => {
    const get = async () => {
      const resovedPractitioner = await service.getPractionerDetails(id);
      setPractitioner(resovedPractitioner);
    };

    get();
  }, [service, id]);

  /*useEffect(() => {
    const get = async () => {
      const date = new Date('2023-10-05').toISOString().split('T')[0];

      const slots = await service.getAvailableSlots(date);

      console.log('slots', slots);
    };

    get();
  }, [service]);*/
  
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
    
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowInput(!showInput)}>Take Appointment</button>
    
          {showInput && (
            <select id="appointmentType" value={selectedAppointmentType} onChange={(e) => handleAppointmentTypeChange(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
              <option value="" disabled>Choose appointment type</option>
              {
                appointmentTypes.map((appointmentType) => (
                  <option key={appointmentType.id} value={appointmentType.id}>
                    {appointmentType.name}
                  </option>
                ))
              }
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
  <Calendar
  onChange={handleDateChange}
  value={selectedDate}
  tileDisabled={({ date, view }) => 
    view === 'month' && !availableSlots.some(availableDate => 
      availableDate.toISOString().slice(0, 10) === date.toISOString().slice(0, 10))
  }
    tileClassName={({ date, view }) => {
  if (view === 'month') {
    const dateString = date.toISOString().slice(0, 5);
    if (!availableSlots.some(availableDate => availableDate.toISOString().slice(0, 10) === dateString)) {
      return 'bg-gray-200 text-gray-500 cursor-not-allowed'; 
    } else {
      return 'bg-white text-gray-700 cursor-pointer hover:bg-blue-100'; 
    }
  }
}}
  />
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