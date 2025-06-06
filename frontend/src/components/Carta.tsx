import { useEffect, useState } from "react";

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  precio_M: number | null;
  categoria_id: number;
  imagen?: string; // Por si luego decides añadirlo
}

interface Categoria {
  id: number;
  nombre: string;
}

interface CategoriaConProductos extends Categoria {
  productos: Producto[];
}

export default function Carta() {
  const [categoriasConProductos, setCategoriasConProductos] = useState<
    CategoriaConProductos[]
  >([]);
  const [productoSeleccionado, setProductoSeleccionado] =
    useState<Producto | null>(null);

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const resCategorias = await fetch(
          "http://localhost:3001/api/categorias"
        );
        const categorias: Categoria[] = await resCategorias.json();

        const resProductos = await fetch("http://localhost:3001/api/productos");
        const productos: Producto[] = await resProductos.json();

        const agrupado: CategoriaConProductos[] = categorias.map(
          (categoria) => ({
            ...categoria,
            productos: productos.filter((p) => p.categoria_id === categoria.id),
          })
        );

        setCategoriasConProductos(agrupado);
      } catch (err) {
        console.error("Error al cargar carta", err);
      }
    };

    fetchDatos();
  }, []);

  const cerrarModal = () => setProductoSeleccionado(null);

  const formatearPrecio = (producto: Producto) => {
    const precioL = Number(producto.precio).toFixed(2);
    const precioM =
      producto.precio_M !== null ? Number(producto.precio_M).toFixed(2) : null;

    return precioM ? `M: ${precioM} €, L: ${precioL} €` : `L: ${precioL} €`;
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Nuestra Carta</h1>

      {categoriasConProductos.map((categoria) => (
        <div key={categoria.id} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{categoria.nombre}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categoria.productos.map((producto) => (
              <div
                key={producto.id}
                className="bg-white shadow-md rounded-2xl p-4 cursor-pointer hover:shadow-xl transition"
                onClick={() => setProductoSeleccionado(producto)}
              >
                <h3 className="text-lg font-bold">{producto.nombre}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {producto.descripcion}
                </p>
                <p className="text-md font-semibold mt-2">
                  {formatearPrecio(producto)}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {productoSeleccionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative animate-fadeIn">
            <button
              onClick={cerrarModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl hover:cursor-pointer"
              aria-label="Cerrar"
            >
              ×
            </button>
            <img
              src={productoSeleccionado.imagen || "../src/assets/Bubble-tea.jpg"}
              alt={productoSeleccionado.nombre}
              className="rounded-xl w-50 object-cover mb-4"
            />
            <h3 className="text-2xl font-bold">
              {productoSeleccionado.nombre}
            </h3>
            <p className="text-gray-600 mt-2">
              {productoSeleccionado.descripcion}
            </p>
            <p className="text-lg font-semibold mt-4">
              {formatearPrecio(productoSeleccionado)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
