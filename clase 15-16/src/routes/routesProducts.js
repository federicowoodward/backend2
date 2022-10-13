import {Router} from "express";
import { db_SQL } from '../db/dbConfig.js'
import "../models/productsModels.js";

const router = Router();

router.get('/', async (req, res) => {
  try {
    // select * from products
    const products = await  db_SQL.from('products').select('*')
    if (products.length !== 0) {
      res.json({ products })
    } else {
      res.json({ products: 'No hay productos disponibles' })
    }
  } catch (error) {
    console.log(error)
  }
})
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    // select * from products where id=id
    const product = await db_SQL.from('products').where('id', id).select('*')
    if (product.length !== 0) {
      res.json({ product })
    } else {
      res.json({ mensaje: 'producto no encontrado' })
    }
  } catch (error) {
    console.log(error)
  }
})
router.post('/', async (req, res) => {
  const { name, price, stock } = req.body

  // insert into products (name,price,stock) value ('valueName','valuePrice','valueStock')
  try {
    const productCreated = await  db_SQL
      .from('products')
      .insert({ name, price, stock })
    res.json({
      mensaje: 'producto creado con exito',
      productId: productCreated,
    })
  } catch (error) {
    console.log(error)
  }
})
router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { name, price, stock } = req.body
  try {
    // update products set name='nameValue' where id=id
    await  db_SQL.from('products').where('id', id).update({ name, price, stock })
    res.json({
      mensaje: 'producto actualizado con exito',
    })
  } catch (error) {
    console.log(error)
  }
})
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    // delete from products where id=id
    await db_SQL.from('products').where('id', id).del()
    res.json({ mensaje: 'producto eliminado con exito' })
  } catch (error) {
    console.log(error)
  }
})

export default router;