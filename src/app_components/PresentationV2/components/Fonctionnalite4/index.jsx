import React from 'react';
import Nathalie from '/src/assets/nathalie.jpeg'; 
import Veronique from '/src/assets/veronique.jpg'; 
import Joel from '/src/assets/joel.webp'; 
import Sarah from '/src/assets/sarah.jpeg'; 
import PlayIcon from '/src/assets/dite.png'; // Ensure you have a play icon image in your assets


const testimonials = [
  {
    name: 'Nathalie Dega',
    role: 'a consulté en hypnose',
    imageUrl: Nathalie,
    videoUrl: 'path-to-video'
  },
  {
    name: 'Véronique',
    role: 'a consulté en naturopathie',
    imageUrl: Veronique,
    videoUrl: 'path-to-video'
  },
  {
    name: 'Joel',
    role: 'a consulté en sophrologie',
    imageUrl: Joel,
    videoUrl: 'path-to-video'
  },
  {
    name: 'Sarah',
    role: 'a consulté en réflexologie',
    imageUrl: Sarah,
    videoUrl: 'path-to-video'
  },
 
];

const TestimonialsSection = () => {
  return (
    <div className="rounded-md pt-12 pb-8 px-4 mt-5 max-w-5xl mx-auto">
      <div className="text-center mb-4"> 
        <h2 className="text-2xl text-black font-bold">They talk about us</h2>
        <div className="flex justify-center items-center mt-1">
          <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
          <span className="ml-2 text-black">1089 Google</span>
        </div>
      </div>
      <div className="flex flex-wrap justify-center overflow-x-auto py-8 mx-auto max-w-3xl">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex-none w-1/4 px-2">
            <div className="bg-white p-4 rounded-lg shadow relative">
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
              <h3 className="text-lg font-semibold text-black">{testimonial.name}</h3>
              <p className="text-sm text-black">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;