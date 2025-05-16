import { useState } from "react";

const sections = [
  { id: 1, color: "bg-red-800", content: "Imagen 1" },
  { id: 2, color: "bg-red-600", content: "Imagen 2" },
  { id: 3, color: "bg-red-900", content: "Imagen 3" },
  { id: 4, color: "bg-red-700", content: "Imagen 4" },
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
              className={`flex-1 transition-all duration-300 ${
                section.color
              } hover:opacity-80 ${active === index ? "ring-4 ring-white" : ""}`}
            />
          ))}
        </div>

        {/* Right side (background/image display) */}
        <div
          className={`flex-1 transition-all duration-500 flex items-center justify-center ${
            sections[active].color
          }`}
        >
          {/* Contenido dinámico */}
          <div className="w-64 h-64 bg-white opacity-20 rotate-45"></div>
        </div>
      </div>
    </div>
  );
}
