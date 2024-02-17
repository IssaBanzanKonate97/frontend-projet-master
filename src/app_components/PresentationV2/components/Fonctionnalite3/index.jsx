import React from 'react';
import Logo1 from '../../../../assets/reassurance-experience-removebg-preview.png';
import Logo2 from '../../../../assets/reassurance-recommendation-removebg-preview.png';
import Logo3 from '../../../../assets/reassurance-avis-removebg-preview.png';
 

const FeatureSection = () => {
  return (
    <div className="relative">
      <div className="bg-[#3BAFBC] flex flex-col sm:flex-row mt-4 p-4 rounded-md pt-12 max-w-5xl mx-auto"> 
        <div className="rounded-lg max-w-6xl mx-auto mb-8 sm:mb-0 sm:mr-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
          Act for your well-being
          </h1>

          <p className="mt-5 text-white text-left mb-8">
            Freesession allows everyone to become an actor in their health<br /> and well-being by facilitating access to complementary practices.<br /> Freesession wishes to inform, to provide honest keys to understanding to allow everyone to choose freely, in full awareness of the risks and benefits.
            <a href="#" className="text-white-500 hover:underline">
              Learn more about our purpose and mission
            </a>.
          </p>

          <div className="flex items-center">
            <img src="https://picsum.photos/200/300" alt="Solange Arnaud" className="w-32 h-32 object-cover rounded-full mr-4" />
            <button className="bg-black hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full">
              See the video
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="p-4 rounded-md flex items-center text-center bg-white border border-black mb-4">
            <img src={Logo1} alt="Logo 1" className="w-8 h-8 rounded-full mr-2" />
            <p className="font-bold text-black">Verified Trainings and Experiences</p>
          </div>

          <div className="p-4 rounded-md flex items-center text-center bg-white border border-black mb-4">
            <img src={Logo2} alt="Logo 2" className="w-8 h-8 rounded-full mr-2" />
            <p className="font-bold text-black">Verified Recommendations</p>
          </div>

          <div className="p-4 rounded-md flex items-center text-center bg-white border border-black">
            <img src={Logo3} alt="Logo 3" className="w-8 h-8 rounded-full mr-2" />
            <p className="font-bold text-black">Verified Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
