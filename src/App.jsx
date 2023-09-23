import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './app_components/Dashboard/Dashboard';
import Loading from './app_components/Loading/Loading';
import Login from './app_components/Auth/Login';
import Register from './app_components/Register/Register';
import Presentation from './app_components/Presentation/Presentation';
import PractitionerDetails from './app_components/PractitionerDetails/PractitionerDetails';
import Calendar from './app_components/Calendar/Calendar';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/practitionerDetails" element={<PractitionerDetails />} />
        <Route path="/calendar" element={<Calendar />} /> {/* Fixed the capitalization */}
      </Routes>
    </Router>
  );
}
