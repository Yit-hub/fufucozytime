// routes/encargos.ts
import { Router } from 'express'
import { db } from '../db'

const router = Router()

// GET /api/encargos
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM encargos ORDER BY fecha DESC')
    res.json(rows)
  } catch (error) {
    console.error('Error al obtener encargos:', error)
    res.status(500).json({ error: 'Error al obtener encargos' })
  }
})

export default router
