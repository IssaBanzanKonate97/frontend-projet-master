import React from 'react';
import TitaImage from '/src/assets/tita.jpeg'; 


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
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h2 className="text-2xl text-black font-bold">They talk about </h2>
        <div className="mt-1 flex justify-center">
          <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
          <span className="ml-2 text-gray-600">1089 Google</span>
        </div>
      </div>

      <div className="flex overflow-x-auto py-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex-none w-1/4 px-2">
            <div className="bg-white p-4 rounded-lg shadow">
              <img                 
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <button
                onClick={() => {
                  // Implement play video logic
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                aria-label={`Play ${testimonial.name}'s video`}
              >
                <img
                  src=""
                  alt=""
                  className="w-10 h-10"
                />
              </button>
            </div>
            <div className="mt-2 text-center">
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;

               
