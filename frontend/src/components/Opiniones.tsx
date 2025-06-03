import { useEffect, useRef, useState } from "react";

interface Opinion {
  id: number;
  nombre: string;
  estrellas: number;
  descripcion: string;
  fecha: string;
}

export default function Opiniones() {
  const [opiniones, setOpiniones] = useState<Opinion[]>([]);
  const scrollContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/opiniones")
      .then((res) => res.json())
      .then((data) => setOpiniones(data))
      .catch((err) => console.error("Error al cargar opiniones", err));
  }, []);

  // Auto-scroll cada X milisegundos
  useEffect(() => {
    const container = scrollContainer.current;
    if (!container) return;

    const scrollStep = 1;
    const interval = setInterval(() => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollLeft = 0; // volver al inicio
      } else {
        container.scrollLeft += scrollStep;
      }
    }, 30); // velocidad del scroll

    return () => clearInterval(interval);
  }, [opiniones]);

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-6">
      <h2 className="text-3xl font-bold text-center mb-4">Opiniones</h2>
      <div
        ref={scrollContainer}
        className="flex overflow-x-auto space-x-4 px-4 no-scrollbar transition-all"
        style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
      >
        {opiniones.map((opinion) => (
          <div
            key={opinion.id}
            className="min-w-[250px] bg-white rounded-xl shadow-md p-4 flex-shrink-0"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{opinion.nombre}</span>
              <span className="text-yellow-500">
                {"★".repeat(opinion.estrellas) + "☆".repeat(5 - opinion.estrellas)}
              </span>
            </div>
            <p className="text-sm text-gray-700">{opinion.descripcion}</p>
            <p className="text-xs text-gray-500 mt-2">
              {new Date(opinion.fecha).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
