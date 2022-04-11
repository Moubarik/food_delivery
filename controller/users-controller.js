import models from '../models/index.js'
import AppException from '../exceptions/AppException.js'


class usersController {

    async getuser(req, res) {
        
        try {
            const users = await models.users.findById(req.params.id);
            res.status(202).json({
                status: 'success',
                data: {
                    users,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async getusers(req, res) {
        try {
            let filter = {}
           if (req.query.name) filter.name = req.query.name;
           if (req.query.role) filter.role = req.query.role;
            const users = await models.users.find(filter);
            res.status(202).json({
                status: 'success',
                data: {
                    users,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async createadmin(req, res) {
        try {
            const newusers = await models.users.create({ ...req.body, role:'admin' });
            res.status(202).json({
                status: 'success',
                data: {
                    users: newusers,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async updateusers(req, res) {

        try {
            const users = await models.users.findByIdAndUpdate(
                req.params.id,
                req.body, {
                    new: true,
                    runValidators: true,
                }
            );

            res.status(202).json({
                status: 'success',
                data: {
                    users,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async deleteusers(req, res) {
        try {
          const users = await models.users.findByIdAndDelete(req.params.id);
    
                res.status(202).json({
                    status: 'success',
                    data: {
                        users,
                    },
                });
            } catch (err) {
                throw new AppException(err, 400);
            }
    }
    



}

export default new usersController();