import React from 'react';

const Fonctionnalite2 = () => {
  return (
    <div className="max-w-5xl mx-auto my-5 p-5 mt-10">
      <div className="flex items-start justify-between">
        
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-black">
          Our practitioners<br /> accompany you<br /> to act for your well-being.
          </h2>
          
          <button className="bg-black hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full">
          All disorders
          </button>
        </div>
        {/* Galerie pour mes images */}
        <div className="flex overflow-x-auto space-x-1">
          
          <div className="min-w-max p-4 rounded-md text-center flex flex-col justify-center items-center">
            {/* Photo 1 */}
            <img src="/src/assets/tita.jpeg" alt="Ayurveda" className="w-32 h-32 object-cover rounded-md" />
            <p className="font-bold mt-2">Ayurveda</p>
            <p className="mt-2">Recommended by 18% <br /> of our users</p>
          </div>
          
          <div className="min-w-max p-4 rounded-md text-center flex flex-col justify-center items-center">
            <img src="/src/assets/image-scaled.jpeg" alt="Hypnose" className="w-32 h-32 object-cover rounded-md" />
            <p className="font-bold mt-2">Hypnose</p>
            <p className="mt-2">Recommended by 18% <br /> of our users</p>
          </div>
          
          <div className="min-w-max p-4 rounded-md text-center flex flex-col justify-center items-center">
            <img src="/src/assets/loup.jpeg" alt="Énergétique Traditionnelle Chinoise" className="w-32 h-32 object-cover rounded-md" />
            <p className="font-bold mt-2">Hypnose</p>
            <p className="mt-2">Recommended by 18% <br /> of our users</p>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Fonctionnalite2;
