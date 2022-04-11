import categorieController from '../../controller/categorie-controller.js';
import authrization from '../../middlewares/authorization.js'
import auth from '../../middlewares/authentification.js'

export default {

    group: {
      prefix: '/repas/categorie',
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
        handler: categorieController.getonecategorie,
      },
      {
        method: 'get',
        path: '/:id',
        handler: categorieController.getcategories,
      },
      {
        method: 'post',
        path: '/create',
        handler: categorieController.createcategorie,
      },
      {
        method: 'put',
        path: '/:id',
        handler: categorieController.updatecategorie,
      },
      {
        method: 'delete',
        path: '/:id',
        handler: categorieController.deletecategorie,
      },
    ],
  };

