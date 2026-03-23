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
        const newCart = await Cart.create({quantity})
        res.status(201).json(newCart)
    }
   catch(err){
        next(err)
    }
}
//HTTP-Getone
export const getOneCart= async  (req, res,next) => {
    try{
        const {id}=req.params
        const onecart = await Cart.findOne({
            where: {id}
        })
        if (!onecart) return
        res.status(404).json({
            message:'карта с таким ID не найден'
        })
        res.status(200).json(onecart)
    }
    catch(err){
        next(err)
    }
}
//HTTP-PUT метод
export const updateCart = async (req, res, next) => {
  try {
    const { id } = req.params
    const [updated] = await Cart.update(req.body, { where: { id } })
    if (!updated) return res.status(404).json({message: 'карта не найден'})
      const Cart = await Cart.findByPk(id)
      res.json(Cart)
  }
  catch (err) {
    next(err)
  }
}
//HTTP-PATCH метод
export const updateCartStatus = async (req, res, next) => {
  try {
    const { id } = req.params
    const { rating } = req.body
 
    const newRating = await Cart.findByPk(id)
    if (!newRating) return res.status(404).json({ message: "карта не найден"})
      newRating.rating = rating
    await newRating.save()
    res.json(newRating)
  }
   catch (err) {
    next(err)
  }
}