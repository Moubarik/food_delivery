import livreurController from '../../controller/livreur-controller.js';
import authrization from '../../middlewares/authorization.js'
import auth from '../../middlewares/authentification.js'

export default {

    group: {
      prefix: '/livreurs',
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
        handler: livreurController.getlivreurs,
      },
      {
        method: 'get',
        path: '/:id',
        handler: livreurController.getlivreur,
      },
      {
        method: 'post',
        path: '/',
        handler: livreurController.createlivreur,
      },
      {
        method: 'put',
        path: '/:id',
        handler: livreurController.updatelivreur,
      },
      {
        method: 'delete',
        path: '/:id',
        handler: livreurController.deletelivreur,
      },
    ],
  };

