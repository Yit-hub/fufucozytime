import { useState } from "react";

interface Producto {
  id: number;
  nombre: string;
  precio: string;
  descripcion: string;
  imagen: string;
}

interface Categoria {
  nombre: string;
  productos: Producto[];
}

const menu: Categoria[] = [
  {
    nombre: "Cafés",
    productos: [
      {
        id: 1,
        nombre: "Café Espresso",
        precio: "1,50€",
        descripcion: "Café corto e intenso, ideal para despertar los sentidos.",
        imagen: "/images/espresso.jpg",
      },
      {
        id: 2,
        nombre: "Café Latte",
        precio: "2,00€",
        descripcion: "Café con leche cremoso, perfecto para una tarde tranquila.",
        imagen: "/images/latte.jpg",
      },
    ],
  },
  {
    nombre: "Tés",
    productos: [
      {
        id: 3,
        nombre: "Té Verde",
        precio: "1,80€",
        descripcion: "Refrescante y saludable, ideal para relajarse.",
        imagen: "/images/te-verde.jpg",
      },
    ],
  },
];

export default function Carta() {
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);

  const cerrarModal = () => {
    setProductoSeleccionado(null);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Nuestra Carta</h1>
      {menu.map((categoria) => (
        <div key={categoria.nombre} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{categoria.nombre}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categoria.productos.map((producto) => (
              <div
                key={producto.id}
                className="bg-white shadow-md rounded-2xl p-4 cursor-pointer hover:shadow-xl transition"
                onClick={() => setProductoSeleccionado(producto)}
              >
                <h3 className="text-lg font-bold">{producto.nombre}</h3>
                <p className="text-sm text-gray-600">{producto.descripcion}</p>
                <p className="text-md font-semibold mt-2">{producto.precio}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal manual */}
      {productoSeleccionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative animate-fadeIn">
            <button
              onClick={cerrarModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
              aria-label="Cerrar"
            >
              ×
            </button>
            <img
              src={productoSeleccionado.imagen}
              alt={productoSeleccionado.nombre}
              className="rounded-xl w-full h-48 object-cover mb-4"
            />
            <h3 className="text-2xl font-bold">{productoSeleccionado.nombre}</h3>
            <p className="text-gray-600 mt-2">{productoSeleccionado.descripcion}</p>
            <p className="text-lg font-semibold mt-4">{productoSeleccionado.precio}</p>
          </div>
        </div>
      )}
    </div>
  );
}
