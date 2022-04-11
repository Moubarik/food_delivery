import models from '../models/index.js'
import AppException from '../exceptions/AppException.js'


class chef_secteurController {

    async getchef_secteur(req, res) {
        
        try {
            const chef_secteur = await models.chef_secteur.findById(req.params.id);
            res.status(202).json({
                status: 'success',
                data: {
                    chef_secteur,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async getchefs_secteur(req, res) {
        try {
            const chef_secteur = await models.chef_secteur.find();
            res.status(202).json({
                status: 'success',
                data: {
                    chef_secteur,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async createchef_secteur(req, res) {
        try {
            const newchef_secteur = await models.chef_secteur.create(req.body);
            res.status(202).json({
                status: 'success',
                data: {
                    chef_secteur: newchef_secteur,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async updatechef_secteur(req, res) {

        try {
            const chef_secteur = await models.chef_secteur.findByIdAndUpdate(
                req.params.id,
                req.body, {
                    new: true,
                    runValidators: true,
                }
            );

            res.status(202).json({
                status: 'success',
                data: {
                    chef_secteur,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async deletechef_secteur(req, res) {
        try {
          const chef_secteur = await models.chef_secteur.findByIdAndDelete(req.params.id);
    
                res.status(202).json({
                    status: 'success',
                    data: {
                        chef_secteur,
                    },
                });
            } catch (err) {
                throw new AppException(err, 400);
            }
    }
    



}

export default new chef_secteurController();