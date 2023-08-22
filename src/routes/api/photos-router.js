import express from 'express';
import controller from '../../controllers/photos-controller.js';
import { photosAddSchema } from '../../schemas/photosSchemas.js';
import { validateBody } from '../../decorators/validateBody.js';
import { isEmptyBody } from '../../middlewars/isEmptyBody.js';

const photosRouter = express.Router();

photosRouter.get('/', controller.getAll);

photosRouter.get('/:photoId', controller.getById);

photosRouter.post(
  '/',
  isEmptyBody,
  validateBody(photosAddSchema),
  controller.add
);

photosRouter.put(
  '/:photoId',
  isEmptyBody,
  validateBody(photosAddSchema),
  controller.updateById
);

photosRouter.delete('/:photoId', controller.deleteById);

export default photosRouter;
