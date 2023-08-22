import express from 'express';
import photosRouter from './routes/api/photos-router.js';

const app = express();

app.use('/api/photos', photosRouter);

app.listen(3001, () => console.log('Database connection successful 3001'));
