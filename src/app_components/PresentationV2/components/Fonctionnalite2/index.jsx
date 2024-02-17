import React from 'react';

const Fonctionnalite2 = () => {
  return (
    <div className="max-w-5xl mx-auto my-5 p-5 mt-10">
      <div className="flex items-start justify-between">
        
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-black">
          Our practitioners <br /> support you to act <br />for your well-being.
          </h2>
          
          <button className="bg-[#225886] hover:bg-[#3BAFBC] text-white font-bold py-2 px-4 rounded-full">
            All disorders
          </button>
        </div>
        {/* Galerie pour mes images */}
        <div className="flex overflow-x-auto space-x-1">
          
          <div className="min-w-max p-4 rounded-md text-center flex flex-col justify-center items-center flex-shrink-0">
            {/* Photo 1 */}
            <img src="/src/assets/images.jpg" alt="peau" className="w-32 h-32 object-cover rounded-md" />
            <p className="font-bold mt-2">skin problem</p>
           
          </div>
          
          <div className="min-w-max p-4 rounded-md text-center flex flex-col justify-center items-center flex-shrink-0">
            <img src="/src/assets/fatigue.PNG" alt="fatigue" className="w-50 h-32 object-cover rounded-md" />
            <p className="font-bold mt-2">fatigue and sleep</p>
           
          </div>
          
          <div className="min-w-max p-4 rounded-md text-center flex flex-col justify-center items-center flex-shrink-0">
            <img src="/src/assets/medically.PNG" alt="Énergétique Traditionnelle Chinoise" className="w-32 h-32 object-cover rounded-md" />
            <p className="font-bold mt-2">medically <br />assisted procreation</p>
            
          </div>
          
            
        </div>
      </div>
    </div>
  );
};

export default Fonctionnalite2;
