import { Product } from "../models/ProductsModels.js"
import { Router} from "express"
export const router =Router()

app.get('/clients/',async (req, res) => {
    try{
        const getAllProducts = await Product.findAll()
        res.status(200).json(getAllProducts)
    }
    catch(error){
        console.error("Не удалось получить данные")
    }
})

export default router