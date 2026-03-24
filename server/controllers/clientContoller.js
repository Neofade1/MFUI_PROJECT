import { Client } from "../models/clientModel.js"

export const getAllClients = async (req, res, next) => {
    try{
        const getAllClients = await Client.findAll()
        res.status(200).json(getAllClients)
    }
    catch(err){
        next(err)
    }
}

// HTTP-Getone - ИСПРАВЛЕННАЯ ВЕРСИЯ
export const getOneClient = async (req, res, next) => {
    try{
        const { id } = req.params
        const oneclient = await Client.findOne({
            where: { id }
        })
        
        if (!oneclient) {
            return res.status(404).json({
                message: 'Пользователь с таким ID не найден'
            })
        }
        
        res.status(200).json(oneclient)
    }
    catch(err){
        next(err)
    }
}

// HTTP-POST метод
export const createClient = async (req, res, next) => {
    try{
        const { name, email, rating, bday } = req.body
        const newClient = await Client.create({ name, email, rating, bday })
        res.status(201).json(newClient)
    }
    catch(err){
        next(err)
    }
}

// HTTP-PUT метод
export const updateClient = async (req, res, next) => {
  try {
    const { id } = req.params
    const [updated] = await Client.update(req.body, { where: { id } })
    if (!updated) {
        return res.status(404).json({ message: 'Клиент не найден' })
    }
    const client = await Client.findByPk(id)
    res.json(client)
  }
  catch (err) {
    next(err)
  }
}

// HTTP-PATCH метод
export const updateClientStatus = async (req, res, next) => {
  try {
    const { id } = req.params
    const { rating } = req.body
 
    const client = await Client.findByPk(id)
    if (!client) {
        return res.status(404).json({ message: "Клиент не найден" })
    }
    
    client.rating = rating
    await client.save()
    res.json(client)
  }
  catch (err) {
    next(err)
  }
}

// HTTP-DELETE метод
export const deleteClient = async (req, res, next) => {
  try {
    const { id } = req.params

    const deleted = await Client.destroy({
      where: { id }
    })

    if (!deleted) {
      return res.status(404).json({ message: "Клиент не найден" })
    }
    
    res.status(200).json({ message: "Клиент удален" })
  }
  catch (err) {
    next(err)
  }
}