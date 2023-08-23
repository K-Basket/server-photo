import mongoose from 'mongoose';
import app from './src/app.js';
import 'dotenv/config'; // или второй вариант подключения ниже
// import dotenv from 'dotenv';
// dotenv.config();

const { DB_HOST, PORT = 3001 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`💙💛 Database connection successful port: ${PORT}`)
    );
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1); // останавливает все запущенные процессы
  }); // подключение к MongoDB
