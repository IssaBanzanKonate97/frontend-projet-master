import React from 'react';

const Ayurveda = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">Ayurveda</h1>
      <p className="mb-4">
        L'Ayurveda est une médecine traditionnelle indienne dont les notions fondamentales sont
        celles d'un équilibre permanent à conserver pour être en pleine santé et d'un
        développement de nos capacités d'autoguérison, en harmonie avec notre environnement.
      </p>
      <img
        src="/src/assets/main.png" // Replace with the path to your image
        alt="Ayurveda Healing"
        className="mb-4"
      />
      <h2 className="text-2xl font-semibold mb-3">Ayurveda: Comment ça marche ?</h2>
      <p className="mb-4">
        L'Ayurveda est un processus complet, encore utilisé principalement en Inde ainsi qu'au Sri
        Lanka. Il puise ses sources dans des concepts fondateurs, très divergents de ceux de la
        médecine occidentale. Il considère que l'Homme est lié à son environnement.
      </p>
      {/* ... Additional content ... */}
    </div>
  );
};

export default Ayurveda;
