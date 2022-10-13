import {Router} from "express";
import { db_SL3 } from "../db/dbConfig.js";
import "../models/chatModels.js";

const router = Router();

router.get(`/mensajes`, async (req, res) => {
    try {
        console.log("ok")
        const chat = await db_SL3.from("chat").select('*')
        if (chat.length !== 0) {

            res.json({ chat })
        } else {
            
        res.json({ chat: 'Aun no hay mensajes!' })
        }
    } catch (error) {
        console.log(error)
    }
})
router.post('/', async (req, res) => {
    try {
        const { email, message } = req.body
        const timestamp = Date();
        const newMessage = await db_SL3.from("chat").insert({ email, timestamp, message });
        res.json({ newMessage })
    } catch (error) {
        console.log(error)
    }
})
router.delete('/:id', async (req, res) => {
    const  id  = req.params.id
    try {
        const deletedMessage = await db_SL3.from("chat").where('id', id).del();
        res.json({ deletedMessage })
    } catch (error) {
        console.log(error)
    }
})
export default router;