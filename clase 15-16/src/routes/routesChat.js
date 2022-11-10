import { Router } from "express";
import TextMongoDAO from "../persistencia/daos/textDaos.js";

const router = Router();
const TextMongo = new TextMongoDAO();

router.get('/chat', async (req, res) => {
    const products = await TextMongo.get()
    res.send(products)
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const products = await TextMongo.get(id)
    res.send(products)
})

router.post('/', async (req, res) => {
    const product = req.body
    const productCreated = await TextMongo.create(product)
    res.send(productCreated)
})

router.put('/:id', async (req, res) => {
    const id  = req.params.id
    const data = req.body
    const udaptedProduct = await TextMongo.update(id, data)
    res.json(udaptedProduct)
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const deletedProduct = await TextMongo.delete(id)
    res.send(deletedProduct)
})

export default router;