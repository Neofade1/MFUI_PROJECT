import { Product } from "../models/ProductsModels.js"

export const getAllProducts= async  (req, res) => {
    try{
        const getAllProducts = await Product.findAll()
        res.status(200).json(getAllProducts)
    }
    catch(error){
        console.error("Не удалось получить данные")
    }
}


//HTTP
export const createProducts= async  (req, res) => {
    try{
        const {name,description,status}=req.body
        const newProduct = await Product.create({name,description,status})
        res.status(201).json(newProduct)
    }
    catch(error){
        console.error("Не удалось добавить продукт")
    }
}