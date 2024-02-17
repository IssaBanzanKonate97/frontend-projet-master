import React from 'react';

const Fonctionnalite = () => {
  return (
    <div className="max-w-5xl mx-auto my-5 p-5">
      <div className="flex items-start justify-between">
       
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-black">
          Discover the complementary<br/> practice specialties
          </h2>
          <p className="text-black font-bold">
          Practices selected to meet all your expectations and help you get better
          </p>
          <button className="bg-[#225886] hover:bg-[#3BAFBC] text-white font-bold py-2 px-4 rounded-full">
          All specialties
          </button>
        </div>
        {/* Galerie pour mes images */}
        <div className="flex overflow-x-auto space-x-1">
          
        <a href="" className="min-w-max p-4 rounded-md text-center flex flex-col justify-center items-center flex-shrink-0">
    <img src="/src/assets/ayurveda.png" alt="alcools" className="w-32 h-32 object-cover rounded-md" />
    <p className="font-bold mt-2">ayurveda</p>
    <p className="mt-1">recommended by 81%<br /> of our users</p>
  </a>
          
  <a href="" className="min-w-max p-4 rounded-md text-center flex flex-col justify-center items-center flex-shrink-0">
            <img src="/src/assets/hypnose.png" alt="mego" className="w-32 h-32 object-cover rounded-md" />
            <p className="font-bold mt-2">Hypnose</p>
            <p className="mt-1">recommended by 81% <br /> of our users</p>
            </a>
          
            <a href="" className="min-w-max p-4 rounded-md text-center flex flex-col justify-center items-center flex-shrink-0">
            <img src="/src/assets/traditionelle.PNG" alt="traditionelle" className="w-32 h-32 object-cover rounded-md" />
            <p className="font-bold mt-2">traditional<br/>Chinese energy</p>
            <p className="mt-1">recommended by 81% <br /> of our users</p>
            </a>
            
        </div>
      </div>
    </div>
  );
};

export default Fonctionnalite;
