import jwt from 'jsonwebtoken';
import models from '../models/index.js';
import AuthService from '../services/auth-service.js';
import AppException from '../exceptions/AppException.js';

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token)
    return next(new AppException('You need to be logged in first!', 401));

  await jwt.verify(token, process.env.APP_KEY, async (err, user) => {
    if (err) return next(new AppException(err, 401));

    try {
      const authUser = await models.users.findById(user.id);
      if (!authUser) {
        return next(
          new AppException(
            'The user belonging to this token does no longer exist',
            401
          )
        );
      }
      if (authUser.passwordChangedAt) {
        if (
          await AuthService.changedPasswordAfter(
            authUser.passwordChangedAt,
            user.iat
          )
        )
          return next(
            new AppException(
              'User recently changed password! Pmease login again :)',
              401
            )
          );
      }
      req.user = authUser;
      next();
    } catch (e) {
      return next(new AppException('You need to be logged in first!', 401));
    }
  });
};
export default auth;
