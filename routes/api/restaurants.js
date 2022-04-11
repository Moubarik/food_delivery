import restaurantController from '../../controller/restaurants-controller.js';
import authrization from '../../middlewares/authorization.js'
import auth from '../../middlewares/authentification.js'
import upload from '../../middlewares/uploadImage.js'

export default {

    group: {
      prefix: '/restaurants',
      middlewares: [
        auth,
        function (req, res, next) {
          authrization(req, res, next, 'admin', 'chef_secteur');
        },
      ],
    },
    routes: [
      {
        method: 'get',
        path: '/',
        handler: restaurantController.getrestaurants,
      },
      {
        method: 'get',
        path: '/:id',
        handler: restaurantController.getrestaurant,
      },
      {
        method: 'post',
        path: '/',
        middlewares:[upload.uploads],
        handler: restaurantController.createrestaurants,
      },
      {
        method: 'put',
        path: '/:id',
        handler: restaurantController.updaterestaurants,
      },
      {
        method: 'delete',
        path: '/:id',
        handler: restaurantController.deleterestaurants,
      },
    ],
  };

