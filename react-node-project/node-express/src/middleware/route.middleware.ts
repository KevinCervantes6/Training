import express from 'express';
import IRoute from '../routes/index.routes';

const registerRouteMiddleware = (server: express.Application, routes: IRoute[]) => {

    //login middleware
    routes.forEach( (route: IRoute) => {
        server.use(route.api, route.router)
    });

}

export default registerRouteMiddleware;