import { useState, useEffect } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [empleado, setEmpleado] = useState<any>(null);
  const [encargos, setEncargos] = useState([]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/api/empleados");
      const empleados = await res.json();

      const encontrado = empleados.find(
        (emp: any) => emp.email === email && emp.contraseña === contraseña
      );

      if (encontrado) {
        setEmpleado(encontrado);
      } else {
        alert("Correo o contraseña incorrectos");
      }
    } catch (err) {
      console.error("Error al iniciar sesión", err);
      alert("Error en el servidor");
    }
  };

  const obtenerEncargos = () => {
    fetch(`http://localhost:3001/api/encargos`)
      .then((res) => res.json())
      .then((data) => setEncargos(data))
      .catch((err) => console.error("Error al cargar encargos", err));
  };

  useEffect(() => {
    if (empleado) {
      obtenerEncargos();
      const intervalo = setInterval(obtenerEncargos, 3000); // cada 3 segundos

      return () => clearInterval(intervalo); // limpia al desmontar
    }
  }, [empleado]);

  const cambiarEstado = async (id: number, estado: string) => {
    try {
      await fetch(`http://localhost:3001/api/encargos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ estado }),
      });
      obtenerEncargos();
    } catch (err) {
      console.error("Error al cambiar estado", err);
    }
  };

  const cerrarSesion = () => {
    setEmpleado(null);
    setEmail("");
    setContraseña("");
    setEncargos([]);
  };

  const getColor = (estado: string) => {
    switch (estado) {
      case "pendiente":
        return "bg-yellow-400";
      case "hecho":
        return "bg-green-600";
      case "rechazado":
        return "bg-red-600";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-start py-8 px-4">
      {!empleado ? (
        <>
          <h1 className="text-3xl font-bold mb-6 mt-50">Login</h1>
          <form
            onSubmit={handleLogin}
            className="bg-gray-700 p-6 rounded-md space-y-4 w-72"
          >
            <input
              className="w-full p-2 bg-gray-300"
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full p-2 bg-gray-300"
              placeholder="Contraseña"
              type="password"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
            <button type="submit" className="w-full bg-rose-400 text-white p-2">
              Iniciar Sesión
            </button>
          </form>
        </>
      ) : (
        <div className="w-full max-w-4xl space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Encargos</h2>
            <button
              onClick={cerrarSesion}
              className="bg-gray-800 text-white px-4 py-2 rounded"
            >
              Cerrar sesión
            </button>
          </div>

          {encargos.map((encargo: any) => (
            <div
              key={encargo.id}
              className={`${getColor(
                encargo.estado
              )} p-4 rounded-md text-white shadow-md`}
            >
              <div className="flex justify-between items-center mb-1 font-bold">
                <span>{encargo.nombre}</span>
                <span className="text-sm">
                  {new Date(encargo.fecha).toLocaleDateString()}
                </span>
              </div>
              <p className="mb-2">{encargo.descripcion}</p>

              {encargo.estado === "pendiente" && (
                <div className="flex gap-2">
                  <button
                    onClick={() => cambiarEstado(encargo.id, "rechazado")}
                    className="bg-red-700 px-4 py-1 rounded hover:bg-red-800"
                  >
                    Rechazar
                  </button>
                  <button
                    onClick={() => cambiarEstado(encargo.id, "hecho")}
                    className="bg-green-700 px-4 py-1 rounded hover:bg-green-800"
                  >
                    Hecho
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
