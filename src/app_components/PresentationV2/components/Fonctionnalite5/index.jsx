import React from 'react';

const BlogSection = () => {
  return (
    <div className="max-w-5xl mx-auto px-1 py-8 bg-white mt-10">
      <div className="flex items-center justify-between">
        
        <div className="flex -space-x-4">
          <img
            src="/src/assets/plat.jpg"
            alt="Healthy breakfast bowl"
            className="w-60 h-40 lg:w-50 lg:h-40 object-cover shadow-lg ring-2 ring-white"
          />
         
        </div>

  
        <div className="pl-12">
          <h2 className="text-2xl font-semibold text-gray-800">
          The best of complementary practices by practitioners <br/> of the freesession network
          </h2>
          <p className="mt-4 text-gray-600">
           
            You will find articles on the blog about food, well-being, family and natural health
          </p>
          <button className="mt-6 bg-[#225886] text-white py-2 px-6 rounded-full focus:outline-none transition-colors duration-300">
          See all articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
