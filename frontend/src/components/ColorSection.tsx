import { useState } from "react";

const sections = [
  { id: 1, color: "bg-green-300", image: "../src/assets/green-tea.png", text: "Disfruta de nuestro ácido lácteo de lima", label:"ácido lácteo de lima"},
  { id: 2, color: "bg-yellow-200", image: "../src/assets/maracuya-tea.png", text: "Saborea el ácido lácteo de maracuyá", label:"ácido lácteo de maracuya" },
  { id: 3, color: "bg-pink-200", image: "../src/assets/pomelo-tea.png", text: "Experimenta la frescura de nuestro ácido lácteo de fresa", label:"ácido lácteo de fresa" },
  { id: 4, color: "bg-gray-200", image: "../src/assets/lima-tea.png", text: "Siente el placer de nuestro ácido lácteo de pomelo", label:"ácido lácteo de pomelo" },
];

export default function InteractiveSection() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col h-screen">
      <br />
      {/* Título */}
      <h1 className="text-4xl font-bold text-center py-6 text-black bg-white">
        Prueba nuestros productos más refrescantes
      </h1>
      <br />
      {/* Contenido principal */}
      <div className="flex flex-1">
        {/* Column with buttons */}
        <div className="flex flex-col w-32">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setActive(index)}
              className={`flex-1 transition-all duration-300 ${section.color
                } hover:opacity-80 ${active === index ? "ring-4 ring-white" : ""}`}
              aria-label={section.label}
            />
          ))}
        </div>

        {/* Right side (background/image display) */}
        <div
          className={`flex-1 transition-all duration-500 flex flex-col items-center justify-center ${sections[active].color}`}
        >
          <img
            src={sections[active].image}
            alt={`Producto ${sections[active].id}`}
            className="max-w-xs md:max-w-md lg:max-w-lg object-contain drop-shadow-lg mb-4"
          />
          <p className="text-white text-center text-lg font-semibold">
            {sections[active].text}
          </p>
        </div>
      </div>
    </div>
  );
}