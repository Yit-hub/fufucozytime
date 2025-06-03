import express from 'express'
import cors from 'cors'
import empleadosRoutes from './routes/empleados'
import encargosRoutes from './routes/encargos'
import productosRoutes from './routes/productos'
import categoriasRoutes from './routes/categorias'
import opinionesRoutes from './routes/opiniones'



const app = express()

// Permitir solicitudes desde el frontend (localhost:5173)
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))

app.use(express.json())

app.use('/api/empleados', empleadosRoutes)
app.use('/api/encargos', encargosRoutes)
app.use('/api/productos', productosRoutes)
app.use('/api/categorias', categoriasRoutes)
app.use('/api/opiniones', opinionesRoutes)



app.listen(3001, () => {
  console.log('Servidor backend corriendo en http://localhost:3001')
})
