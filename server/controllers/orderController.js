import { Order } from "../models/orderModels.js"

export const getAllOrder = async (req, res, next) => {
    try{
        const getAllOrder = await Order.findAll()
        res.status(200).json(getAllOrder)
    }
    catch(err){
        next(err)
    }
}

// HTTP - CREATE
export const createOrder = async (req, res, next) => {
    try{
        const { status, date, totalPrice } = req.body
        const newOrder = await Order.create({ status, date, totalPrice })
        res.status(201).json(newOrder)
    }
    catch(err){
        next(err)
    }
}

// HTTP - GET ONE (ИСПРАВЛЕНО)
export const getOneOrder = async (req, res, next) => {
    try{
        const { id } = req.params
        const oneorder = await Order.findOne({
            where: { id }
        })
        
        if (!oneorder) {
            return res.status(404).json({
                message: 'Заказ с таким ID не найден'
            })
        }
        
        res.status(200).json(oneorder)
    }
    catch(err){
        next(err)
    }
}

// HTTP - PUT метод
export const updateOrder = async (req, res, next) => {
  try {
    const { id } = req.params
    const [updated] = await Order.update(req.body, { where: { id } })
    
    if (!updated) {
        return res.status(404).json({ message: 'Заказ не найден' })
    }
    
    const order = await Order.findByPk(id)
    res.json(order)
  }
  catch (err) {
    next(err)
  }
}

// HTTP - PATCH метод (ИСПРАВЛЕНО)
export const updateOrderStatus = async (req, res, next) => {
  try {
    const { id } = req.params
    const { status } = req.body
 
    const order = await Order.findByPk(id)
    if (!order) {
        return res.status(404).json({ message: "Заказ не найден" })
    }
    
    order.status = status
    await order.save()
    res.json(order)
  }
  catch (err) {
    next(err)
  }
}

// HTTP - DELETE
export const deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params

    const deleted = await Order.destroy({
      where: { id }
    })

    if (!deleted) {
      return res.status(404).json({ message: "Заказ не найден" })
    }
    
    res.status(200).json({ message: "Заказ удален" })
  }
  catch (err) {
    next(err)
  }
}
