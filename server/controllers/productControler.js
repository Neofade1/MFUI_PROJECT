import { Product } from "../models/ProductsModels.js"

export const getAllProducts= async  (req, res) => {
    try{
        const getAllProducts = await Product.findAll()
        res.status(200).json(getAllProducts)
    }
    catch(err){
        next(err)
    }
}


//HTTP
export const createProducts= async  (req, res) => {
    try{
        const {name,description,status}=req.body
        const newProduct = await Product.create({name,description,status})
        res.status(201).json(newProduct)
    }
    catch(err){
        next(err)
    }
}
//HTTP-Getone
export const getOneProducts= async  (req, res,next) => {
    try{
        const {id}=req.params
        const oneproduct = await Product.findOne({
            where: {id}
        })
        if (!oneproduct) return
        res.status(404).json({
            message:'Продукт с таким ID не найден'
        })
        res.status(200).json(oneproduct)
    }
    catch(err){
        next(err)
    }
}
//HTTP-PUT метод
export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params
    const [updated] = await Product.update(req.body, { where: { id } })
    if (!updated) return res.status(404).json({message: 'продукт не найден'})
      const client = await Product.findByPk(id)
      res.json(client)
  }
  catch (err) {
    next(err)
  }
}
//HTTP-PATCH метод
export const updateProductStatus = async (req, res, next) => {
  try {
    const { id } = req.params
    const { rating } = req.body
 
    const newRating = await Product.findByPk(id)
    if (!newRating) return res.status(404).json({ message: "продукт не найден"})
      newRating.rating = rating
    await newRating.save()
    res.json(newRating)
  }
   catch (err) {
    next(err)
  }
}