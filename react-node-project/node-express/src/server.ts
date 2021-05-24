import express from 'express';
import registerCommonMiddleware from './middleware/commonmiddleware';
import registerLogginMiddleware from './middleware/logginmiddleware';
import IRoute from './routes/index.routes';

class Server {

    server: express.Application;

    constructor(routes: IRoute[]) {
        this.server = express();
        this.registerMiddlewares();
        this.registerRoutes(routes);
    }

    private registerMiddlewares() {
        registerCommonMiddleware(this.server);
        registerLogginMiddleware(this.server)
    }

    private registerRoutes(routes: IRoute[]) {
        routes.forEach( (route: IRoute) => {
            this.server.use(route.api, route.router);
        });
    }

}

export default Server;