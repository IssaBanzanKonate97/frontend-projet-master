import React from 'react';

const Fonctionnalite = () => {
  return (
    <div className="max-w-5xl mx-auto my-5 p-5">
      <div className="flex items-start justify-between">
       
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-black">
          Discover our institute
          </h2>
          <p className="text-black font-bold">
          Personalized practitioners to guide you towards significant improvement..
          </p>
          <button className="border-2 border-orange-500 rounded-full px-4 py-2 text-orange-500 hover:bg-orange-500 hover:text-white">
          All specialties
          </button>
        </div>
        {/* Galerie pour mes images */}
        <div className="flex overflow-x-auto space-x-1">
          
          <div className="min-w-max p-4 rounded-md text-center flex flex-col justify-center items-center">
           
            <img src="/src/assets/alcool.png" alt="Ayurveda" className="w-32 h-32 object-cover rounded-md" />
            <p className="font-bold mt-2">Addiction</p>
            <p className="mt-1">all about <br /> alcoholism</p>
          </div>
          
          <div className="min-w-max p-4 rounded-md text-center flex flex-col justify-center items-center">
            <img src="/src/assets/tabac.png" alt="Hypnose" className="w-32 h-32 object-cover rounded-md" />
            <p className="font-bold mt-2">Tabacco</p>
            <p className="mt-1">How to stop <br /> smoking?</p>
          </div>
          
          <div className="min-w-max p-4 rounded-md text-center flex flex-col justify-center items-center">
            <img src="/src/assets/drogue.png" alt="Énergétique Traditionnelle Chinoise" className="w-32 h-32 object-cover rounded-md" />
            <p className="font-bold mt-2">Drug</p>
            <p className="mt-1">addiction and<br /> drug dependence</p>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Fonctionnalite;
