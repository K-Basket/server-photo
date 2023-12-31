import Joi from 'joi';

export const photosAddSchema = Joi.object({
  title: Joi.string().required(),
  location: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
  favorite: Joi.boolean(),
  genre: Joi.string(),
  releseDate: Joi.string(),
});
