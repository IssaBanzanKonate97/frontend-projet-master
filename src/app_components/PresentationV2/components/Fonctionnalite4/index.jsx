import React from 'react';
import Nathalie from '/src/assets/nathalie.jpeg'; 
import Veronique from '/src/assets/veronique.jpg'; 
import Joel from '/src/assets/joel.webp'; 
import Sarah from '/src/assets/sarah.jpeg'; 
import PlayIcon from '/src/assets/dite.png'; 


import { Facebook, Instagram, Youtube } from 'react-feather';

const testimonials = [
  {
    name: 'Nathalie Déga',
    role: 'Freesession',
    imageUrl: "https://picsum.photos/200/300",
    videoUrl: 'path-to-video'
  },
  {
    name: 'Véronique Oualid',
    role: 'Freesession',
    imageUrl: "https://picsum.photos/seed/picsum/200/300",
    videoUrl: 'path-to-video'
  },
  {
    name: 'Nathalie Conté',
    role: 'Freesession',
    imageUrl: "https://picsum.photos/200",
    videoUrl: 'path-to-video'
  },
  {
    name: 'Muriel Dangremont',
    role: 'Freesession',
    imageUrl: "https://picsum.photos/200/300?lion",
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
      <div className="flex flex-wrap justify-center overflow-x-auto py-8 mx-auto max-w-5xl">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex-none w-full sm:w-1/2 md:w-1/4 px-2">
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
      
      <div className="flex justify-center items-center gap-20 mt-3">
        <Youtube className="text-red-600 w-8 h-8 cursor-pointer" />
        <Instagram className="text-purple-500 w-8 h-8 cursor-pointer" />
        <Facebook className="text-blue-600 w-8 h-8 cursor-pointer" />
      </div>
    </div>
  );
};

export default TestimonialsSection;
