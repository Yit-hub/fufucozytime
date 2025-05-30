// pages/Login.tsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Empleados = () =>{
const [email, setEmail] = useState('')
  const [contraseña, setContraseña] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('http://localhost:3001/api/empleados')
    const empleados = await res.json()

    const encontrado = empleados.find(
      (emp: any) => emp.email === email && emp.contraseña === contraseña
    )

    if (encontrado) {
      localStorage.setItem('empleado', JSON.stringify(encontrado))
      navigate('/encargos')
    } else {
      alert('Correo o contraseña incorrectos')
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <img src="/logo.png" className="w-40 mb-4" />
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form onSubmit={handleLogin} className="bg-gray-700 p-6 rounded-md space-y-4 w-72">
        <input className="w-full p-2 bg-gray-300" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full p-2 bg-gray-300" placeholder="Contraseña" type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
        <button type="submit" className="w-full bg-rose-400 text-white p-2">Iniciar Sesión</button>
      </form>
    </div>
  )
}
