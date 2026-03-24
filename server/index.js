import express from 'express';
import 'dotenv/config';
import { sequelize } from './models/index.js'; // теперь это будет работать
import cors from 'cors';
import { router } from './routes/router.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());


// ДОБАВЬТЕ ЭТОТ МАРШРУТ ДЛЯ ПРОВЕРКИ
app.get('/', (req, res) => {
    res.json({ 
        message: 'Сервер работает!',
        status: 'ok',
        timestamp: new Date().toISOString()
    });
});

app.use('', router);
app.use(errorHandler);

const startServer = async () => {
    try {
        app.listen(port, () => console.log(`Сервер работает http://localhost:${port}`));
        await sequelize.authenticate();
        console.log('Подключение к Бд успешно');
        await sequelize.sync({ alter: true });
        console.log('Модели успешно синхронизированы');
    } catch(error) {
        console.error('Не удалось подключиться к Бд', error);
    }
}

startServer();