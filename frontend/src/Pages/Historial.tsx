// pages/Encargos.tsx
import { useEffect, useState } from 'react'

type Encargo = {
  id: number
  nombre: string
  descripcion: string
  fecha: string
  estado: 'pendiente' | 'hecho' | 'rechazado'
}

export const Historial = () => {
  const [encargos, setEncargos] = useState<Encargo[]>([])

  const fetchEncargos = async () => {
    const res = await fetch('http://localhost:3001/api/encargos')
    const data = await res.json()
    setEncargos(data)
  }

  const actualizarEstado = async (id: number, estado: string) => {
    await fetch(`http://localhost:3001/api/encargos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ estado })
    })
    fetchEncargos()
  }

  useEffect(() => {
    fetchEncargos()
  }, [])

  return (
    <div className="p-6 bg-gray-300 min-h-screen">
      <h1 className="text-xl mb-4">Hola {JSON.parse(localStorage.getItem('empleado') || '{}').nombre || 'Empleado'}</h1>
      <div className="bg-gray-700 p-4 rounded-md space-y-4">
        {encargos.map(encargo => {
          let bgColor = encargo.estado === 'pendiente' ? 'bg-yellow-400' : encargo.estado === 'hecho' ? 'bg-green-600' : 'bg-red-600'

          return (
            <div key={encargo.id} className={`${bgColor} p-4 rounded-md text-white`}>
              <div className="flex justify-between mb-2">
                <strong>{encargo.nombre}</strong>
                <span>{new Date(encargo.fecha).toLocaleDateString()}</span>
              </div>
              <p>{encargo.descripcion}</p>
              {encargo.estado === 'pendiente' && (
                <div className="flex gap-2 mt-2">
                  <button onClick={() => actualizarEstado(encargo.id, 'rechazado')} className="bg-red-800 px-3 py-1 rounded">Rechazar</button>
                  <button onClick={() => actualizarEstado(encargo.id, 'hecho')} className="bg-green-800 px-3 py-1 rounded">Hecho</button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
