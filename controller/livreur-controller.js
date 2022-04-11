import models from '../models/index.js'
import AppException from '../exceptions/AppException.js'


class LivreurController {

    async getlivreur(req, res) {
        
        try {
            const livreur = await models.livreur.findById(req.params.id);
            res.status(202).json({
                status: 'success',
                data: {
                    livreur,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async getlivreurs(req, res) {
        try {
            const livreur = await models.livreur.find();
            res.status(202).json({
                status: 'success',
                data: {
                    livreur,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async createlivreur(req, res) {
        try {
            const newLivreur = await models.livreur.create(req.body);
            const user = await models.users.create({...req.body, role: 'livreur' });

            res.status(202).json({
                status: 'success',
                data: {
                    Livreur: newLivreur,
                    livreurs: user,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async updatelivreur(req, res) {

        try {
            const livreur = await models.livreur.findByIdAndUpdate(
                req.params.id,
                req.body, {
                    new: true,
                    runValidators: true,
                }
            );

            res.status(202).json({
                status: 'success',
                data: {
                    livreur,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async deletelivreur(req, res) {
        try {
          const livreur = await models.livreur.findByIdAndDelete(req.params.id);
    
                res.status(202).json({
                    status: 'success',
                    data: {
                        livreur,
                    },
                });
            } catch (err) {
                throw new AppException(err, 400);
            }
    }



}

export default new LivreurController();