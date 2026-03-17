import express from 'express' // создание экземпляра express из внешнего express
import 'dotenv/config' // import одного экземпляра - import {Sequelize} from 'sequelize'
import { sequelize } from './models/index.js'
import cors from 'cors'
import { router } from './routes/router.jsjs'

// константы приложения(app) и порт
const app = express() 
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use('',router)

const startServer = async () => {
    try {
        app.listen(port, () => console.log(`Сервер работает http://localhost:${port}`))
        await sequelize.authenticate(); // подключает сервер к Бд через sequelize(db.js)
        console.log('Подключение к Бд успешно');
        await sequelize.sync({alter: true});
        console.log('Модели успешно синхронезированы');
        }
        catch(error){
            console.error('Не удалось подключиться к Бд', error);
            console.error('Модели не синхронезированы', error);
        }
}

startServer()