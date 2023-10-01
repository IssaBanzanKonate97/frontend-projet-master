/* eslint-disable react-refresh/only-export-components */
import { useParams } from 'react-router-dom';
// import logo from '../../assets/logo.png';
// import profilePicture from '../../assets/thumbnail.jpeg';
import './PraticionerDetails.css';
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

const PraticionerDetails = () => {
  const { id } = useParams();

  const service = usePractitionerService();

  const [practitioner, setPractitioner] = useState(undefined);

  useEffect(() => {
    const get = async () => {
      const resovedPractitioner = await service.getPractionerDetails(id);
      setPractitioner(resovedPractitioner);
    };

    get();
  }, [service, id]);

  useEffect(() => {
    const get = async () => {
      const date = new Date('2023-10-05').toISOString().split('T')[0];

      const slots = await service.getAvailableSlots(date);

      console.log('slots', slots);
    };

    get();
  }, [service]);
  return (
    practitioner === undefined ? <Loading /> :
      <div className='bg-slate-100 h-screen w-screen overflow-y-auto'>
        <Header />
        <PresentationHeader practitioner={practitioner} />
        <NavigationLinks />
        <section className='flex gap-4 max-w-7xl py-4 px-0.5 mx-auto'>
          <div className="flex flex-col gap-3">
            <DetailsCard
              id="#presentation"
              icon={<AlignLeft className='w-4 h-4 text-cyan-600' />}
              title="Présentation"
            >
              <p className="text-slate-600 text-sm mb-2 inter">
                {practitioner.description}
              </p>
            </DetailsCard>

            <DetailsCard
              id="#openings_hours"
              icon={<Clock className='w-4 h-4 text-cyan-600' />}
              title="Horaires & contact"
            >
              <div className='grid grid-cols-2 gap-8'>
                <div>
                  <h5 className="text-slate-700 font-bold text-sm mb-2">
                    Horaires
                  </h5>
                  <p className="text-slate-600 text-sm mb-2 inter">
                    {practitioner.openingHours}
                  </p>
                </div>

                <div>
                  <h5 className="text-slate-700 font-bold text-sm mb-2">
                    Contact
                  </h5>
                  <p className="text-slate-600 text-sm mb-2 inter">
                    {practitioner.contact}
                  </p>
                </div>
              </div>
            </DetailsCard>
          </div>
          <div className='w-96'>
            <DetailsCard
              title="En résumé"
            >

            </DetailsCard>
          </div>
        </section>
      </div>
  );
};

export default function index() {
  return <PractitionerProvider>
    <PraticionerDetails />
  </PractitionerProvider>
}
