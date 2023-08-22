import express from 'express';
import cors from 'cors';

const app = express(); // app - web-server (вызов express как функцию, создание сервера)
const corsMiddleware = cors();

const database = { a: 39, b: 59 }; // условная база данных

app.use(corsMiddleware);

app.get('/api/photos', (req, res) => {
  res.json(database);
});

// middleware - если при запросе backenda маршрут отсутствует - выдать 404 ошибку
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Not found Hi',
  });
});

app.listen(3001, () => console.log('Database connection successful 3001'));
