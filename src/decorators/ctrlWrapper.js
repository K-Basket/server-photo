const ctrlWrapper = ctrl => {
  const func = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error); // если передан в next error, тогда express ищет функцию обработки ошибок c 4-мя параметрами, которая в app.js
    }
  };

  return func;
};

export default ctrlWrapper;
