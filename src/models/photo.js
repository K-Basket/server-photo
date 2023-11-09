import { Schema, model } from 'mongoose';

const photoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  favorite: {
    type: Boolean,
    default: false,
  }, // по умолчанию будет стоять false
  genre: {
    type: String,
    enum: ['fantastic', 'love story', 'other'],
    required: true,
  },
  releseDate: {
    type: String,
    math: /^\d{4}$/,
    required: true,
  },
});
/*
создаем модель:
  1-параметр - название коллекции в ед/числе!!! будет автоматически создана коллекция во множ.числе
  2-параметр - схема (photoSchema)
*/
const Photo = model('photo', photoSchema);

export default Photo;
