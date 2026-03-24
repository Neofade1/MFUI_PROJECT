import { Product } from "../models/ProductsModels.js"

export const getAllProducts = async (req, res, next) => {
    try{
        const getAllProducts = await Product.findAll()
        res.status(200).json(getAllProducts)
    }
    catch(err){
        next(err)
    }
}

// HTTP - CREATE
export const createProducts = async (req, res, next) => {
    try{
        const { name, description, price } = req.body
        const newProduct = await Product.create({ name, description, price })
        res.status(201).json(newProduct)
    }
    catch(err){
        next(err)
    }
}

// HTTP - GET ONE (ИСПРАВЛЕНО)
export const getOneProducts = async (req, res, next) => {
    try{
        const { id } = req.params
        const oneproduct = await Product.findOne({
            where: { id }
        })
        
        if (!oneproduct) {
            return res.status(404).json({
                message: 'Продукт с таким ID не найден'
            })
        }
        
        res.status(200).json(oneproduct)
    }
    catch(err){
        next(err)
    }
}

// HTTP - PUT метод
export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params
    const [updated] = await Product.update(req.body, { where: { id } })
    
    if (!updated) {
        return res.status(404).json({ message: 'Продукт не найден' })
    }
    
    const product = await Product.findByPk(id)
    res.json(product)
  }
  catch (err) {
    next(err)
  }
}

// HTTP - PATCH метод (ИСПРАВЛЕНО)
export const updateProductStatus = async (req, res, next) => {
  try {
    const { id } = req.params
    const { price } = req.body
 
    const product = await Product.findByPk(id)
    if (!product) {
        return res.status(404).json({ message: "Продукт не найден" })
    }
    
    product.price = price
    await product.save()
    res.json(product)
  }
  catch (err) {
    next(err)
  }
}

// HTTP - DELETE
export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params

    const deleted = await Product.destroy({
      where: { id }
    })

    if (!deleted) {
      return res.status(404).json({ message: "Товар не найден" })
    }
    
    res.status(200).json({ message: "Товар удален" })
  }
  catch (err) {
    next(err)
  }
}