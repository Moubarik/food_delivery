import express from 'express';
import apiRoutes from './api/index.js';

class Router {
  constructor() {
    this.router = express.Router();
    this.apiRoutes = apiRoutes;
  }

  create(app) {
    this._attachMiddleware();
    this._attachApiRoutes();
    this._handlePageNotFound();
    this._handleExceptions();
    app.use(this.router);
  }

  _catchError(handler) {
    return (req, res, next) => {
      handler(req, res, next).catch(next);
    };
  }

  _handleExceptions() {
    this.router.use((err, req, res, next) => {
      err.statusCode = err.status || err.statusCode || 500;
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    });
  }

  _attachMiddleware() {
    this.router.use(express.json());
    this.router.use(express.urlencoded({ extended: false }));
  }

  _handlePageNotFound() {
    this.router.all('*', (req, res) => {
      res.status(404).send('Page not found!');
    });
  }

  _attachApiRoutes() {
    this._attachRoutes(this.apiRoutes, '/api');
  }

  _attachRoutes(routeGroups, prefix = '') {
    routeGroups.forEach(({ group, routes }) => {
      routes.forEach(({ method, path, middlewares = [], handler }) => {
        this.router[method](
          prefix + group.prefix + path,
          [...(group.middlewares || []), ...middlewares],
          this._catchError(handler)
        );
      });
    });
  }
}

export default new Router();
