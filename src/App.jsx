import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './app_components/Dashboard/Dashboard';
import Loading from './app_components/Loading/Loading';
import Login from './app_components/Auth/Login';

export default function App() {
  return <Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </Fragment>
};