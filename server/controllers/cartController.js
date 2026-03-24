import { Cart } from "../models/CartModels.js"

export const getAllCart= async  (req, res) => {
    try{
        const getAllClients = await Cart.findAll()
        res.status(200).json(getAllCart)
    }
    catch(err){
        next(err)
    }
}


//HTTP
export const createCart= async  (req, res) => {
    try{
        const {quantity}=req.body
        const newCart = await Cart.create({quantity,ProductId,OrderId})
        res.status(201).json(newCart)
    }
   catch(err){
    }
}
// HTTP - GET ONE (ИСПРАВЛЕНО)
export const getOneCart = async (req, res, next) => {
    try{
        const { id } = req.params
        const onecart = await Cart.findOne({
            where: { id }
        })
        
        if (!onecart) {
            return res.status(404).json({
                message: 'Корзина с таким ID не найдена'
            })
        }
        
        res.status(200).json(onecart)
    }
    catch(err){
        next(err)
    }
}
// HTTP - PUT метод (ИСПРАВЛЕНО)
export const updateCart = async (req, res, next) => {
  try {
    const { id } = req.params
    const [updated] = await Cart.update(req.body, { where: { id } })
    
    if (!updated) {
        return res.status(404).json({ message: 'Корзина не найдена' })
    }
    
    const cart = await Cart.findByPk(id)
    res.json(cart)
  }
  catch (err) {
    next(err)
  }
}
// HTTP - PATCH метод (ИСПРАВЛЕНО)
export const updateCartStatus = async (req, res, next) => {
  try {
    const { id } = req.params
    const { quantity } = req.body
 
    const cart = await Cart.findByPk(id)
    if (!cart) {
        return res.status(404).json({ message: "Корзина не найдена" })
    }
    
    cart.quantity = quantity
    await cart.save()
    res.json(cart)
  }
  catch (err) {
    next(err)
  }
}
export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params

    const deleted = await Product.destroy({
      where: { id }
    })

    if (!deleted) {
      res.status(404).json({ message: "Товар не найден" })
    } else {
      res.status(200).json({ message: "Товар удален" })
    }
  }
  catch (err) {
    next(err)
  }
}

export const deleteCart = async (req, res, next) => {
  try {
    const { id } = req.params

    const deleted = await Cart.destroy({
      where: { id }
    })

    if (!deleted) {
      res.status(404).json({ message: "Корзина не найдена" })
    } else {
      res.status(200).json({ message: "Корзина удалена" })
    }
  }
  catch (err) {
    next(err)
  }
}