import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './app_components/Loading/Loading';

const Dashboard = lazy(() => import('./app_components/Dashboard/Dashboard'));
const Login = lazy(() => import('./app_components/Auth/Login'));
const Register = lazy(() => import('./app_components/Register/Register'));
// const Presentation = lazy(() => import('./app_components/Presentation/Presentation'));
const PresentationV2 = lazy(() => import('./app_components/PresentationV2'));
const PractitionerDetails = lazy(() => import('./app_components/PractitionerDetails'));
const Calendar = lazy(() => import('./app_components/Calendar/Calendar'));

// eslint-disable-next-line react/prop-types
const LazyLoader = ({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <LazyLoader>
            <PresentationV2 />
          </LazyLoader>
        } />
        <Route path="/login" element={
          <LazyLoader>
            <Login />
          </LazyLoader>
        } />
        <Route path="/register" element={
          <LazyLoader>
            <Register />
          </LazyLoader>
        } />
        <Route path="/dashboard" element={
          <LazyLoader>
            <Dashboard />
          </LazyLoader>
        } />
        <Route path="/details/:id" element={
          <LazyLoader>
            <PractitionerDetails />
          </LazyLoader>
        } />
        <Route path="/calendar" element={
          <LazyLoader>
            <Calendar />
          </LazyLoader>
        } />
      </Routes>
    </Router>
  );
}
