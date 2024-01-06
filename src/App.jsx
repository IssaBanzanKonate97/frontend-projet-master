import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './app_components/Loading/Loading';

const Dashboard = lazy(() => import('./app_components/Dashboard/Dashboard'));
const Login = lazy(() => import('./app_components/Auth/Login'));
const PresentationV2 = lazy(() => import('./app_components/PresentationV2'));
const PractitionerDetails = lazy(() => import('./app_components/PractitionerDetails'));
const BecomePractitioner = lazy(() => import('./app_components/BecomePractitioner'));
const Nous = lazy(() => import('./app_components/Nous'));
const Propos = lazy(() => import('./app_components/Propos'));
const Calendar = lazy(() => import('./app_components/Calendar'));
const Contact = lazy(() => import('./app_components/Contact'));

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
        

        <Route path="/become-practitioner" element={
          <LazyLoader>
            <BecomePractitioner />
          </LazyLoader>
        } />
        <Route path="/nous" element={
          <LazyLoader>
            <Nous />
          </LazyLoader>
        } />
         <Route path="/propos" element={
          <LazyLoader>
            <Propos />
          </LazyLoader>
        } />
        <Route path="/calendar" element={
          <LazyLoader>
            <Calendar />
          </LazyLoader>
        } />

        <Route path="/contact" element={
          <LazyLoader>
            <Contact />
          </LazyLoader>
        } />
      </Routes>
    </Router>
  );
}
