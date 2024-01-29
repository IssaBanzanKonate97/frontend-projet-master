import React from 'react';
import Logo1 from '../../../../assets/reassurance-experience-removebg-preview.png';
import Logo2 from '../../../../assets/reassurance-recommendation-removebg-preview.png';
import Logo3 from '../../../../assets/reassurance-avis-removebg-preview.png';
import TitaImage from '/src/assets/tita.jpeg'; 


const FeatureSection = () => {
  return (
    <div className="relative">

      
      <div className="bg-[#3BAFBC] flex mt-4 p-4 rounded-md pt-12 max-w-5xl mx-auto"> 
        <div className="rounded-lg max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white">
          Take action for your well-being.
          </h1>

          <p className="mt-5 text-white text-left mb-8">
           Free session Changement is an institution<br /> dedicated to supporting and helping individuals facing addictions<br /> such as alcohol, tobacco...We enable everyone to take control of their health and well-being<br /> by facilitating access to complementary practices.<br /> Oser le changement aims to inform, provide honest understanding,<br /> and empower individuals to make informed choices, fully aware of the risks and benefits.<br /> 
            <a href="#" className="text-white-500 hover:underline">
            Learn more about our purpose and mission
            </a>.
          </p>

          
          <div className="flex items-center">
            <img src={TitaImage} alt="Solange Arnaud" className="w-32 h-32 object-cover rounded-full mr-4" />
            <button className="bg-black hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full">
              See the video
            </button>
          </div>
        </div>

        
      <div className="flex flex-col ml-auto mr-12">
       
        <div className="p-4 rounded-md flex items-center text-center bg-white border border-black mb-4">
          
          <img src={Logo1} alt="Logo 1" className="w-8 h-8 rounded-full mr-2" />
          <p className="font-bold text-black">Verified Trainings and Experiences</p>
        </div>

        
        <div className="p-4 rounded-md flex items-center text-center bg-white border border-black mb-4">
          
          <img src={Logo2} alt="Logo 2" className="w-8 h-8 rounded-full mr-2" />
          <p className="font-bold text-black">Verified Trainings and Experiences</p>
        </div>

        
        <div className="p-4 rounded-md flex items-center text-center bg-white border border-black">
          
          <img src={Logo3} alt="Logo 3" className="w-8 h-8 rounded-full mr-2" />
          <p className="font-bold text-black">Verified Trainings and Experiences</p>
        </div>
        
      </div>
    
      </div>
    </div>
  );
};

export default FeatureSection;
