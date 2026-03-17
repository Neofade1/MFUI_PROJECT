import { Cart } from "../models/CartModels.js"
import { Router} from "express"
export const router =Router()

app.get('/clients/',async (req, res) => {
    try{
        const getAllCarts = await Cart.findAll()
        res.status(200).json(getAllCarts)
    }
    catch(error){
        console.error("Не удалось получить данные")
    }
})

export default router