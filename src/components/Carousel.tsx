import React, { useState, useEffect } from 'react';

const Carousel = ({ images, slideInterval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, slideInterval);

    return () => clearInterval(interval);
  }, [slideInterval, images.length]);

  return (
    <div className="relative overflow-hidden w-full">
      <div className="whitespace-nowrap overflow-x-auto snap-x">
        <div className="inline-block snap-center">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="w-full h-64 object-cover"
          />
        </div>
        {images.map((image, index) => (
          // Render all slides
          <div key={index} className="inline-block snap-center">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={goToPreviousSlide}
        className="absolute top-0 left-0 z-10 p-4"
      >
        Previous
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-0 right-0 z-10 p-4"
      >
        Next
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 p-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 bg-gray-300 hover:bg-gray-400 ${currentIndex === index ? 'bg-gray-400' : ''} rounded-full`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
