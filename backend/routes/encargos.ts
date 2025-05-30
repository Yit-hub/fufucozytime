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
// routes/encargos.ts
router.put('/:id', async (req, res) => {
  const { estado } = req.body
  const { id } = req.params
  try {
    await db.query('UPDATE encargos SET estado = ? WHERE id = ?', [estado, id])
    res.json({ mensaje: 'Encargo actualizado' })
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el encargo' })
  }
})

export default router
