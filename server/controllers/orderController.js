import { Order } from "../models/orderModels.js"

export const getAllOrder= async  (req, res) => {
    try{
        const getAllOrder = await Order.findAll()
        res.status(200).json(getAllOrder)
    }
    catch(err){
        next(err)
    }
}


//HTTP
export const createOrder= async  (req, res) => {
    try{
        const {status,date,totalPrice}=req.body
        const newOrder = await Order.create({status,date,totalPrice})
        res.status(201).json(newOrder)
    }
    catch(err){
        next(err)
    }
}
//HTTP-Getone
export const getOneOrder= async  (req, res,next) => {
    try{
        const {id}=req.params
        const oneorder = await Order.findOne({
            where: {id}
        })
        if (!oneorder) return
        res.status(404).json({
            message:'меню с таким ID не найден'
        })
        res.status(200).json(oneorder)
    }
    catch(err){
        next(err)
    }
}
//HTTP-PUT метод
export const updateOrder = async (req, res, next) => {
  try {
    const { id } = req.params
    const [updated] = await Order.update(req.body, { where: { id } })
    if (!updated) return res.status(404).json({message: 'меню не найдено'})
      const order = await Order.findByPk(id)
      res.json(order)
  }
  catch (err) {
    next(err)
  }
}
//HTTP-PATCH метод
export const updateOrderStatus = async (req, res, next) => {
  try {
    const { id } = req.params
    const { rating } = req.body
 
    const newRating = await Order.findByPk(id)
    if (!newRating) return res.status(404).json({ message: "меню не найдено"})
      newRating.rating = rating
    await newRating.save()
    res.json(newRating)
  }
   catch (err) {
    next(err)
  }
}