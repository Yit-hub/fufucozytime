import { useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 20000); // 20 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-[100vw] mx-auto overflow-hidden rounded-2xl shadow-lg">
      <div
        className="w-full h-[60vh] bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      />
    </div>
  );
}
