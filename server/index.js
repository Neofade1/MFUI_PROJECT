import express from 'express' // создание экземпляра express из внешнего express
import 'dotenv/config' // import одного экземпляра - import {Sequelize} from 'sequelize'
import { sequelize } from './db.js'

// константы приложения(app) и порт
const app = express() 
const port = process.env.PORT || 3001


const startServer = async () => {
    try {
        app.listen(port, () => {
            console.log(`Раб http://localhost:${port}`)
        })
        await sequelize.authenticate(); // подключает сервер к Бд через sequelize(db.js)
        console.log("Connect saccesfull");
    } catch (error) {
        console.log("Unable to connect", error);
    }
}

startServer()