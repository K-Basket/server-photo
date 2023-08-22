import express from 'express';

const photosRouter = express.Router();

const database = [
  {
    id: '11',
    title: 'img-1',
    locate: 'Kyiv',
  },
  {
    id: '22',
    title: 'img-2',
    locate: 'London',
  },
  {
    id: '33',
    title: 'img-3',
    locate: 'USA',
  },
];

photosRouter.get('/', (req, res) => {
  res.json(database);
});

photosRouter.get('/:id', (req, res) => {
  res.json(database[0]);
});

photosRouter.post('/', (req, res) => {
  res.json(database[0]);
});

export default photosRouter;
