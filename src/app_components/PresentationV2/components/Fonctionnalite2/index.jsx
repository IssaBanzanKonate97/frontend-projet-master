import React from 'react';

const Fonctionnalite2 = () => {
  return (
    <div className="flex mt-4">
      <div className="p-4 rounded-md">
        <h1 className="text-3xl font-bold text-black">
            Our practitioners accompany you<br /> to act for your well-being.
        </h1>
        
        <button className="border-2 border-pink-500 rounded-full px-4 py-2 mt-4 text-pink-500 hover:bg-pink-500 hover:text-white">
            All disorders
        </button>
      </div>
      <div className="flex ml-auto">
        <div className="p-4 rounded-md mr-4 text-center">
          {/* Photo 1 */}
          <img src="/src/assets/tita.jpeg" alt="Photo 1" className="w-32 h-32 object-cover rounded-md" />
          <p className="font-bold mt-2">Hypnosis</p>
          <p className="mt-2">Récommandé par 18% <br /> de nos utilisateurs</p>
        </div>
        <div className="p-4 rounded-md mr-4 text-center">
          {/* Photo 2 */}
          <img src="/src/assets/image-scaled.jpeg" alt="Photo 2" className="w-32 h-32 object-cover rounded-md" />
          <p className="font-bold mt-2">Hypnosis</p>
          <p className="mt-2">Récommandé par 18% <br /> de nos utilisateurs</p>
        </div>
        <div className="p-4 rounded-md text-center">
          {/* Photo 3 */}
          <img src="/src/assets/loup.jpeg" alt="Photo 3" className="w-32 h-32 object-cover rounded-md" />
          <p className="font-bold mt-2">Hypnosis</p>
          <p className="mt-2">Récommandé par 18% <br /> de nos utilisateurs</p>
        </div>
      </div>
    </div>
  );
};

export default Fonctionnalite2;
