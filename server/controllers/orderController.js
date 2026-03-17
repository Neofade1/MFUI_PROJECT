import { Order } from "../models/orderModels.js"

export const getAllOrder= async  (req, res) => {
    try{
        const getAllOrder = await Order.findAll()
        res.status(200).json(getAllOrder)
    }
    catch(error){
        console.error("Не удалось получить данные")
    }
}


//HTTP
export const createOrder= async  (req, res) => {
    try{
        const {name,email,rating,bday}=req.body
        const newOrder = await Order.create({name,email,rating,bday})
        res.status(201).json(newOrder)
    }
    catch(error){
        console.error("Не удалось добавить меню")
    }
}