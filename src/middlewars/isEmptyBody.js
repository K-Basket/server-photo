import { HttpError } from '../helpers/HttpError.js';

// проверяет тело от backend, если тело пустое - отправить ошибку
export const isEmptyBody = (req, res, next) => {
  const { length } = Object.keys(req.body);

  if (!length) next(HttpError(400, 'Body need requied fields'));

  next();
};
