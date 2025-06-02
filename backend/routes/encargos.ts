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

// PUT /api/encargos/:id
router.put('/:id', async (req, res) => {
  const { estado } = req.body
  const { id } = req.params
  try {
    await db.query('UPDATE encargos SET estado = ? WHERE id = ?', [estado, id])
    res.json({ mensaje: 'Encargo actualizado' })
  } catch (error) {
    console.error('Error al actualizar el encargo:', error)
    res.status(500).json({ error: 'Error al actualizar el encargo' })
  }
})

// POST /api/encargos
router.post('/', async (req, res) => {
  const { name, email, phone, comments } = req.body
  const fecha = new Date()
  try {
    await db.query(
      'INSERT INTO encargos (nombre, email, telefono, descripcion, estado, fecha) VALUES (?, ?, ?, ?, ?, ?)',
      [name, email, phone, comments, 'pendiente', fecha]
    )
    res.sendStatus(200)
  } catch (error) {
    console.error('Error al registrar el encargo:', error)
    res.status(500).json({ error: 'Error al registrar el encargo' })
  }
})

export default router
