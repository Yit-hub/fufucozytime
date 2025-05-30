// routes/encargos.ts
import { Router } from 'express'
import { db } from '../db'

const router = Router()

// GET /api/empleados
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM empleados')
    res.json(rows)
  } catch (error) {
    console.error('Error al obtener empleados:', error)
    res.status(500).json({ error: 'Error al obtener empleados' })
  }
})

export default router
