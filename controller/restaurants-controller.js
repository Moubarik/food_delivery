import models from '../models/index.js'
import AppException from '../exceptions/AppException.js'


class restaurantsController {

    async getrestaurant(req, res) {
        
        try {
            
            const restaurants = await models.restaurants.findById(req.params.id);
            res.status(202).json({
                status: 'success',
                data: {
                    restaurants,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async getrestaurants(req, res) {
        try {
            let filter = {}
            if (req.query.title) filter.title = req.query.title;
            if (req.query.city) filter.city = req.query.city;

            const restaurants = await models.restaurants.find(filter).populate({
                path: "repas",

            });
            res.status(202).json({
                status: 'success',
                data: {
                    restaurants,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async createrestaurants(req, res) {
        let images = []
        const uploadedImages = req.files
        // console.log(uploadedImages);
        for (const uploadedImage of uploadedImages) {
            images.push(uploadedImage.filename)
        }

        const restaurants = models.restaurants
        const restaurant = new restaurants({
            title: req.body.title,
            description: req.body.description,
            type: req.body.type,
            city: req.body.city,
            address: req.body.address,
            restaurantImage: images,

        });

        restaurant.save().then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Created restaurant successfully',
                createdrestaurant: {
                    title: result.title,
                    description: result.description,
                    restaurantImage: result.restaurantImage,
                    type: result.type,
                    city: result.city,
                    address: result.description
                }
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    }

    async updaterestaurants(req, res) {

        try {
            const restaurants = await models.restaurants.findByIdAndUpdate(
                req.params.id,
                req.body, {
                    new: true,
                    runValidators: true,
                }
            );

            res.status(202).json({
                status: 'success',
                data: {
                    restaurants,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async deleterestaurants(req, res) {
        try {
          const restaurants = await models.restaurants.findByIdAndDelete(req.params.id);
    
                res.status(202).json({
                    status: 'success',
                    data: {
                        restaurants,
                    },
                });
            } catch (err) {
                throw new AppException(err, 400);
            }
    }



}

export default new restaurantsController();