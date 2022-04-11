import chef_secteurController from '../../controller/chefsecteur-controller.js';

export default {

    group: {
      prefix: '/chef_secteur',
    },
    routes: [
      {
        method: 'get',
        path: '/',
        handler: chef_secteurController.getchefs_secteur,
      },
      {
        method: 'get',
        path: '/:id',
        handler: chef_secteurController.getchef_secteur,
      },
      {
        method: 'post',
        path: '/',
        handler: chef_secteurController.createchef_secteur,
      },
      {
        method: 'put',
        path: '/:id',
        handler: chef_secteurController.updatechef_secteur,
      },
      {
        method: 'delete',
        path: '/:id',
        handler: chef_secteurController.deletechef_secteur,
      },
    ],
  };

