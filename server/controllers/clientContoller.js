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
        res.status(200).json(getAllClients)
    }
    catch(err){
        next(err)
    }
}