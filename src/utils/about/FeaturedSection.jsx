import React from 'react';

const FeaturedSection = () => {
  const placeholderImages = [
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop'
  ];

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto">
        {/* Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {placeholderImages.map((image, index) => (
            <div 
              key={index}
              className="bg-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img 
                src={image}
                alt={`Featured item ${index + 1}`}
                className="w-full h-40 object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Featured in text */}
        <div className="text-center">
          <p className="text-gray-500 text-lg font-medium">Featured in</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;