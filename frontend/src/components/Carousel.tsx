import { useEffect, useState } from "react";

interface CarouselProps {
  images: { url: string; link: string }[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 20000);

    return () => clearInterval(interval);
  }, [images.length]);

  const currentImage = images[currentIndex];

  return (
    <div className="w-full mx-auto overflow-hidden shadow-lg">
      <a
        href={currentImage.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full aspect-[16/10] bg-cover bg-center transition-all duration-1000 cursor-pointer"
        style={{ backgroundImage: `url(${currentImage.url})` }}
      />
    </div>
  );
}
