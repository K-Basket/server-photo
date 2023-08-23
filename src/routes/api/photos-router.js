import express from 'express';
import controller from '../../controllers/photos-controller.js';
import { photosAddSchema } from '../../schemas/photosSchemas.js';
import { validateBody } from '../../decorators/validateBody.js';
import { isEmptyBody } from '../../middlewars/isEmptyBody.js';

export const router = express.Router();

router.get('/', controller.getAll);

router.get('/:photoId', controller.getById);

router.post('/', isEmptyBody, validateBody(photosAddSchema), controller.add);

router.put(
  '/:photoId',
  isEmptyBody,
  validateBody(photosAddSchema),
  controller.updateById
);

router.delete('/:photoId', controller.deleteById);
