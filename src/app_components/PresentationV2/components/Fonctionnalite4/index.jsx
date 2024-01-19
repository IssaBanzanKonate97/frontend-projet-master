import React from 'react';
import TitaImage from '/src/assets/tita.jpeg'; 
import PlayIcon from '/src/assets/189638-removebg-preview.png'; // Ensure you have a play icon image in your assets


const testimonials = [
  {
    name: 'Gabriel Garcia',
    role: 'a consulté en hypnose',
    imageUrl: TitaImage,
    videoUrl: 'path-to-video'
  },
  {
    name: 'Agnès Messager',
    role: 'a consulté en naturopathie',
    imageUrl: TitaImage,
    videoUrl: 'path-to-video'
  },
  {
    name: 'Marie Tresch',
    role: 'a consulté en sophrologie',
    imageUrl: TitaImage,
    videoUrl: 'path-to-video'
  },
  {
    name: 'Marceline Bamabra',
    role: 'a consulté en réflexologie',
    imageUrl: TitaImage,
    videoUrl: 'path-to-video'
  },
 
];

const TestimonialsSection = () => {
  return (
    <div className="bg-slate-500 rounded-md pt-12 pb-8 px-4">
      <div className="text-center mb-4"> 
        <h2 className="text-2xl text-white font-bold">They talk about us</h2>
        <div className="flex justify-center items-center mt-1">
          <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
          <span className="ml-2 text-white">1089 Google</span>
        </div>
      </div>
      <div className="flex flex-wrap justify-center overflow-x-auto py-8 mx-auto max-w-3xl">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex-none w-1/4 px-2">
            <div className="bg-slate-500 p-4 rounded-lg shadow relative">
              <img
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <button
                onClick={() => {
                  
                }}
                className="absolute bottom-0 right-0 mb-4 mr-4"
                aria-label={`Play ${testimonial.name}'s video`}
              >
                <img
                  src={PlayIcon}
                  alt="Play video"
                  className="w-12 h-12"
                />
              </button>
            </div>
            <div className="text-center mt-2">
              <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
              <p className="text-sm text-white">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;