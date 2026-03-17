import { Client } from "../models/clientModel.js"
import { Router} from "express"
export const router =Router()

app.get('/clients/',async (req, res) => {
    try{
        const getAllClients = await Client.findAll()
        res.status(200).json(getAllClients)
    }
    catch(error){
        console.error("Не удалось получить данные")
    }
})

export default router