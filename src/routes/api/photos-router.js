import express from 'express';
import { HttpError } from '../../helpers/HttpError.js';

const photosRouter = express.Router();

const database = [
  {
    id: '11',
    title: 'img-1',
    locate: 'Kyiv',
    description: 'text description',
    image: 'link',
  },
  {
    id: '22',
    title: 'img-2',
    locate: 'London',
    description: 'text description',
    image: 'link',
  },
  {
    id: '33',
    title: 'img-3',
    locate: 'USA',
    description: 'text description',
    image: 'link',
  },
];

photosRouter.get('/', async (req, res, next) => {
  try {
    const result = await database;
    res.json(result);
  } catch (error) {
    next(error);
  }
});

photosRouter.get('/:photoId', async (req, res, next) => {
  try {
    const { photoId } = req.params;
    const result = await photoId;

    if (!result) {
      throw HttpError(404, `Photo with ${photoId} not found`);
    }
    res.json(result);
  } catch (error) {
    next(error); // если передан в next error, тогда express ищет функцию обработки ошибок c 4-мя параметрами, которая в app.js
  }
});

photosRouter.post('/', async (req, res, next) => {
  res.json({ message: 'tamplate message' });
});

photosRouter.delete('/:photoId', async (req, res, next) => {
  res.json({ message: 'tamplate message' });
});

photosRouter.put('/:photoId', async (req, res, next) => {
  res.json({ message: 'tamplate message' });
});

export default photosRouter;
