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
        const {status,date,totalPrice}=req.body
        const newOrder = await Order.create({status,date,totalPrice})
        res.status(201).json(newOrder)
    }
    catch(error){
        console.error("Не удалось добавить меню")
    }
}