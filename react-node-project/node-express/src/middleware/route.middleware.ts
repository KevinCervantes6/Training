import express, {Application, NextFunction, Request, Response} from 'express';
import {IRoute} from '../routes/index.routes';
import path from 'path';

const registerRouteMiddleware = (server: express.Application, routes: IRoute[]) => {

    //login middleware
    routes.forEach( (route: IRoute) => {
        server.use(route.api, route.router)
    });

}

const registerUnhandledRoutesMiddleware = (server: Application) => {

    //Handling unhandled GET requests & return react app
    server.get('/', (request: Request, response: Response) => {
        response.sendFile(path.resolve(__dirname, '../../../react-app/build', 'index.html'))
    });

    server.use((request: Request, response: Response, next: NextFunction) => {
        response.send(`API ${request.path} not implemented`)
    })
}

export {registerRouteMiddleware, registerUnhandledRoutesMiddleware};