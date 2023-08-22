import { HttpError } from '../helpers/HttpError.js';
import { database } from './dataBase.js';
import ctrlWrapper from '../decorators/ctrlWrapper.js';

const getAll = async (req, res) => {
  const result = await database;
  res.json(result);
};

const getById = async (req, res) => {
  const { photoId } = req.params;
  const result = await photoId;

  if (!result) throw HttpError(404, `Photo with ${photoId} not found`);

  res.json(result);
};

const add = async (req, res) => {
  const result = 'add data';
  res.status(201).json(result);
};

const updateById = async (req, res) => {
  const { photoId } = req.params;
  const result = await 'запрос в базу';
  if (!result) throw HttpError(404, `Photo with ${photoId} not found`);

  res.json(result);
};

const deleteById = async (req, res) => {
  const { photoId } = req.params;
  const result = 'делаем запрос в DB по id';
  if (!result) throw HttpError(404, `Photo with ${photoId} not found`);

  res.json({
    message: 'Delete success',
  });
};

export default {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
};
