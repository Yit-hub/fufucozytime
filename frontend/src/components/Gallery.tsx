import React from "react";

interface GalleryProps {
  images: { src: string; alt?: string }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <section className="w-full px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-2xl shadow-md hover:scale-105 transition-transform duration-300">
            <img
              src={image.src}
              alt={image.alt || `Imagen ${index + 1}`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
