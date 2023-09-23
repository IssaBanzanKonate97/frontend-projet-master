import React, { useState } from 'react';
import { DateTime } from 'luxon';
import './Calendar.css';

const getAvailableSlotsParis = (date) => {
  const parisDate = DateTime.fromISO(date, { zone: 'Europe/Paris' });
  const availableSlots = ['09:00', '10:30', '14:00'];

  return availableSlots.map((slot) => {
    const slotTime = parisDate.set({
      hour: parseInt(slot.split(':')[0]),
      minute: parseInt(slot.split(':')[1]),
    });
    return slotTime.toLocaleString(DateTime.TIME_SIMPLE);
  });
};

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // You can perform any actions here, such as sending data to a server
    console.log('Form submitted:', {
      selectedDate,
      selectedSlot,
      firstName,
      lastName,
      email,
      mobile
    });
  };

  return (
    <div className="calendar-container">
      <h1>Calendrier de réservation</h1>
      <div className="date-selector">
        <h2>Sélectionnez une date :</h2>
        <input type="date" onChange={(e) => handleDateChange(e.target.value)} />
      </div>
      {selectedDate && (
        <div className="time-slots">
          <h2>Horaires disponibles le {selectedDate} :</h2>
          <ul>
            {getAvailableSlotsParis(selectedDate).map((slot) => (
              <li key={slot}>
                <button onClick={() => handleSlotSelect(slot)}>
                  {slot}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedSlot && (
        <div className="booking-details">
          <h2>Réserver votre séance :</h2>
          <p>Date : {selectedDate}</p>
          <p>Heure : {selectedSlot}</p>
          
          <form>
            <label>Nom :</label>
            <input type="text" value={lastName} onChange={handleLastNameChange} />
            <label>Prénom :</label>
            <input type="text" value={firstName} onChange={handleFirstNameChange} />
            <label>Email :</label>
            <input type="email" value={email} onChange={handleEmailChange} />
            <label>Mobile :</label>
            <input type="tel" value={mobile} onChange={handleMobileChange} />
          </form>
          <form onSubmit={handleSubmit}>
            {/* ... (existing form fields) ... */}
            <button type="submit">Valider</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Calendar;
