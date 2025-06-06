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
    <div className="w-[100vw] mx-auto overflow-hidden rounded-2xl shadow-lg">
      <a
        href={currentImage.link}
        rel="noopener noreferrer"
        className="block w-full h-[60vh] bg-cover bg-center transition-all duration-1000 cursor-pointer"
        style={{ backgroundImage: `url(${currentImage.url})` }}
      ></a>
    </div>
  );
}
