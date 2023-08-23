import express from 'express';
import logger from 'morgan'; // вывод в консоль запросов
import cors from 'cors';

import { router as photosRouter } from './routes/api/photos-router.js';

const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json()); // прии получении данных от frontend изменяет из бинарного формата на нормальный (req.body)

app.use('/api/photos', photosRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
}); // обработка отсутствующего запроса

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
}); // универсальная функция обработки ошибок

export default app;
