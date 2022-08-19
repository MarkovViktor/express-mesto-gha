const UnauthorizedError = require('../components/UnauthorizedError');
const { checkToken } = require('../components/jwt');

module.exports.isAuth = (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth || !auth.startsWith('Bearer ')) {
    return next(new UnauthorizedError('Необходима авторизация'));
  }

  const token = auth.replace('Bearer ', '');
  let payload;

  try {
    payload = checkToken(token);
  } catch (err) {
    return next(new UnauthorizedError('Необходима авторизация'));
  }

  req.user = payload;

  return next();
};
