import repasController from '../../controller/repas-controller.js';
import authrization from '../../middlewares/authorization.js'
import auth from '../../middlewares/authentification.js'

export default {

    group: {
      prefix: '/repas',
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
        handler: repasController.getonerepas,
      },
      {
        method: 'get',
        path: '/:id',
        handler: repasController.getrepas,
      },
      {
        method: 'post',
        path: '/',
        handler: repasController.createrepas,
      },
      {
        method: 'put',
        path: '/:id',
        handler: repasController.updaterepas,
      },
      {
        method: 'delete',
        path: '/:id',
        handler: repasController.deleterepas,
      },
    ],
  };

