import { Router } from 'express'
import { db } from '../db'

const router = Router()

// Obtener todas las categorías
router.get('/', async (req, res) => {
  try {
    const [categorias] = await db.query('SELECT * FROM categorias')
    res.json(categorias)
  } catch (err) {
    console.error('Error al obtener categorías:', err)
    res.status(500).json({ error: 'Error al obtener categorías' })
  }
})

export default router
