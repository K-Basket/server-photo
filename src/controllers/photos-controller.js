import { HttpError } from '../helpers/HttpError.js';
import ctrlWrapper from '../decorators/ctrlWrapper.js';
import Photo from '../models/photo.js';

const getAll = async (req, res) => {
  const result = await Photo.find();
  res.json(result);
};

const getById = async (req, res) => {
  const { photoId } = req.params;
  const result = await photoId;

  if (!result) throw HttpError(404, `Photo with ${photoId} not found`);

  res.json(result);
};

const add = async (req, res) => {
  const result = await Photo.create(req.body);
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
