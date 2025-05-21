import React, { useEffect, useRef } from "react";

interface Testimonial {
  id: number;
  name: string;
  message: string;
}

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSlider({ testimonials }: TestimonialsSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const speed = 0.5;

    const scroll = () => {
      if (!slider) return;

      scrollAmount += speed;
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0; // Reinicia para simular loop
      }

      slider.scrollLeft = scrollAmount;
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-8">
      <div
        ref={sliderRef}
        className="flex w-max gap-6 px-4"
        style={{ scrollBehavior: "auto" }} // mejor sin smooth para evitar bugs de loop
      >
        {/* Opiniones duplicadas para loop infinito */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={`${testimonial.id}-${index}`}
            className="min-w-[300px] max-w-[300px] flex-shrink-0 bg-white shadow-md p-6 rounded-2xl"
          >
            <h3 className="text-xl font-semibold text-center mb-2">{testimonial.name}</h3>
            <p className="text-sm text-gray-600 text-center">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
