import { Client } from "../models/clientModel.js"

export const getAllClients= async  (req, res) => {
    try{
        const getAllClients = await Client.findAll()
        res.status(200).json(getAllClients)
    }
    catch(err){
        next(err)
    }
}


//HTTP
export const createClient= async  (req, res,next) => {
    try{
        const {name,email,rating,bday}=req.body
        const newClient = await Client.create({name,email,rating,bday})
        res.status(201).json(newClient)
    }
    catch(err){
        next(err)
    }
}
//HTTP-Getone
export const getOneClient= async  (req, res,next) => {
    try{
        const {id}=req.params
        const oneclient = await Client.findOne({
            where: {id}
        })
        if (!oneclient) return
        res.status(404).json({
            message:'Пользователь с таким ID не найден'
        })
        res.status(200).json(oneclient)
    }
    catch(err){
        next(err)
    }
}
//HTTP-PUT метод
export const updateClient = async (req, res, next) => {
  try {
    const { id } = req.params
    const [updated] = await Client.update(req.body, { where: { id } })
    if (!updated) return res.status(404).json({message: 'Клиент не найден'})
      const client = await Client.findByPk(id)
      res.json(client)
  }
  catch (err) {
    next(err)
  }
}
//HTTP-PATCH метод
export const updateClientStatus = async (req, res, next) => {
  try {
    const { id } = req.params
    const { rating } = req.body
 
    const newRating = await Client.findByPk(id)
    if (!newRating) return res.status(404).json({ message: "Клиент не найден"})
      newRating.rating = rating
    await newRating.save()
    res.json(newRating)
  }
   catch (err) {
    next(err)
  }
}