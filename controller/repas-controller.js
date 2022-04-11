import models from '../models/index.js'
import AppException from '../exceptions/AppException.js'


class repasController {

    async getonerepas(req, res) {
        
        try {
            const repas = await models.repas.findById(req.params.id);
            res.status(202).json({
                status: 'success',
                data: {
                    repas,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async getrepas(req, res) {
        try {
            let filter = {}
           if (req.query.name) filter.name = req.query.name;
           if (req.query.price) filter.price = req.query.price;
            const repas = await models.repas.find().populate('categorie');
            res.status(202).json({
                status: 'success',
                data: {
                    repas,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async createrepas(req, res) {
        try {
            const newrepas = await models.repas.create();
            res.status(202).json({
                status: 'success',
                data: {
                    repas: newrepas,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async updaterepas(req, res) {

        try {
            const repas = await models.repas.findByIdAndUpdate(
                req.params.id,
                req.body, {
                    new: true,
                    runValidators: true,
                }
            );

            res.status(202).json({
                status: 'success',
                data: {
                    repas,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async deleterepas(req, res) {
        try {
          const repas = await models.repas.findByIdAndDelete(req.params.id);
    
                res.status(202).json({
                    status: 'success',
                    data: {
                        repas,
                    },
                });
            } catch (err) {
                throw new AppException(err, 400);
            }
    }
    



}

export default new repasController();