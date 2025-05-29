// index.ts
import express from 'express'
import { config } from 'dotenv'
import encargosRoutes from './routes/encargos'


config()

const app = express()
app.use(express.json())

app.use('/api/encargos', encargosRoutes)


const PORT = 3001

app.get('/', (req, res) => {
  res.send('API de la cafetería funcionando 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`)
})
