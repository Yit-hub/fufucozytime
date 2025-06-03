import { Router } from 'express'
import { db } from '../db'

const router = Router()

// Obtener todas las opiniones
router.get('/', async (req, res) => {
  try {
    const [opiniones] = await db.query('SELECT * FROM opiniones')
    res.json(opiniones)
  } catch (err) {
    console.error('Error al obtener opiniones:', err)
    res.status(500).json({ error: 'Error al obtener opiniones' })
  }
})

export default router
