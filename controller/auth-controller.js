import models from '../models/index.js';
import AuthService from '../services/auth-service.js';
import AppException from '../exceptions/AppException.js';



class AuthController {

    async login (req, res, next) {
    const { email, password } = req.body;
    const user = await models.users.findOne({ email }).select('+password');

    if (!user) throw new AppException('invalid mail', 403);

    if (!(await AuthService.isPasswordMatch(password, user.password)))
      throw new AppException('incorrect password', 403);

    const payload = { id: user.id, email: user.email, name: user.name, role:user.role };
    const token = await AuthService.generateToken(payload);

    res.send(token);

    }

    async register(req, res) {
        try {
          const newUser = await models.users.create(req.body);
          res.status(202).json({
            status: 'success',
            data: {
              user: newUser,
            },
          });
        } catch (err) {
          res.status(400).json({
            status: 'fail',
            message: err,
          });
        }
      }


}

export default new AuthController();