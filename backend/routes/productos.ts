// routes/productos.ts
import { Router } from 'express'
import { db } from '../db'

const router = Router()

// GET /api/productos
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM productos')
    res.json(rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error al obtener productos' })
  }
})

// POST /api/productos
router.post('/', async (req, res) => {
  const { nombre, descripcion, precio, categoria_id } = req.body
  try {
    const [result] = await db.query(
      'INSERT INTO productos (nombre, descripcion, precio, precio_M, categoria_id) VALUES (?, ?, ?, ?,?)',
      [nombre, descripcion, precio, categoria_id]
    )
    res.status(201).json({ id: (result as any).insertId })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error al crear producto' })
  }
})

export default router
