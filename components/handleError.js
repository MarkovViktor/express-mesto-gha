const handleError = (err, req, res, next) => {
  res.status(err.status ? err.status : 500)
    .send({ message: err.status ? err.message : 'Ошибка по умолчанию' });
  next();
};

module.exports = handleError;
