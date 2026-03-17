import { Order } from "../models/orderModels.js"
import { Router} from "express"
export const router =Router()

app.get('/clients/',async (req, res) => {
    try{
        const getAllOrders = await Order.findAll()
        res.status(200).json(getAllOrders)
    }
    catch(error){
        console.error("Не удалось получить данные")
    }
})
export default router