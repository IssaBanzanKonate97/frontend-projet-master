import React from 'react';

import Logo1 from '../../../../assets/reassurance-experience-removebg-preview.png';
import Logo2 from '../../../../assets/reassurance-recommendation-removebg-preview.png';
import Logo3 from '../../../../assets/reassurance-avis-removebg-preview.png';
import TitaImage from '/src/assets/tita.jpeg'; // Import the image

const FeatureSection = () => {
  return (
    <div className="bg-gray-200 flex mt-4 p-4 rounded-md">
      <div className="rounded-lg">
        <h1 className="text-3xl font-bold text-black">
          Take action for your well-being.
        </h1>

        <p className="text-lg text-left mb-8">
          Oser le Changement is an institution<br /> dedicated to supporting and helping individuals facing addictions<br /> such as alcohol, tobacco...We enable everyone to take control of their health and well-being<br /> by facilitating access to complementary practices.<br /> Oser le changement aims to inform, provide honest understanding,<br /> and empower individuals to make informed choices, fully aware of the risks and benefits.<br /> 
          <a href="#" className="text-pink-500 hover:underline">
            Learn more about our purpose and mission
          </a>.
          
          {/* Image at the bottom of the <p> tag */}
          <img src={TitaImage} alt="Tita" className="w-32 h-32 object-cover rounded-md mt-4" />
        </p>
      </div>

      {/* Three small vertically aligned divs */}
      <div className="flex flex-col ml-auto">
        {/* First div */}
        <div className="p-4 rounded-md flex items-center text-center bg-white border border-black mb-4">
          {/* Circular logo */}
          <img src={Logo1} alt="Logo 1" className="w-8 h-8 rounded-full mr-2" />
          <p className="font-bold text-black">Verified Trainings and Experiences</p>
        </div>

        {/* Second div */}
        <div className="p-4 rounded-md flex items-center text-center bg-white border border-black mb-4">
          {/* Circular logo */}
          <img src={Logo2} alt="Logo 2" className="w-8 h-8 rounded-full mr-2" />
          <p className="font-bold text-black">Verified Trainings and Experiences</p>
        </div>

        {/* Third div */}
        <div className="p-4 rounded-md flex items-center text-center bg-white border border-black">
          {/* Circular logo */}
          <img src={Logo3} alt="Logo 3" className="w-8 h-8 rounded-full mr-2" />
          <p className="font-bold text-black">Verified Trainings and Experiences</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
