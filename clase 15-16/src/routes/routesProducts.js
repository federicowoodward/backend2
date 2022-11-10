import { Router } from "express";
import ProductsMongoDAO from "../persistencia/daos/productsDaos.js";

const router = Router();
const ProductsMongo = new ProductsMongoDAO();

router.get('/', async (req, res) => {
    const products = await ProductsMongo.get()
    res.send(products)
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const products = await ProductsMongo.get(id)
    res.send(products)
})

router.post('/', async (req, res) => {
    const product = req.body
    const productCreated = await ProductsMongo.create(product)
    res.send(productCreated)
})

router.put('/:id', async (req, res) => {
    const id  = req.params.id
    const data = req.body
    const udaptedProduct = await ProductsMongo.update(id, data)
    res.json(udaptedProduct)
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const deletedProduct = await ProductsMongo.delete(id)
    res.send(deletedProduct)
})

export default router;