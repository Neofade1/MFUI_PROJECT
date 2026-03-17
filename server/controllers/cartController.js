import { Cart } from "../models/CartModels.js"

export const getAllCart= async  (req, res) => {
    try{
        const getAllClients = await Cart.findAll()
        res.status(200).json(getAllCart)
    }
    catch(error){
        console.error("Не удалось получить данные")
    }
}


//HTTP
export const createCart= async  (req, res) => {
    try{
        const {name,email,rating,bday}=req.body
        const newCart = await Cart.create({name,email,rating,bday})
        res.status(201).json(newCart)
    }
    catch(error){
        console.error("Не удалось добавить карту")
    }
}