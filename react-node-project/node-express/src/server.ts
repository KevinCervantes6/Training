import express from 'express';
import registerCommonMiddleware from './middleware/commonmiddleware';
import registerLogginMiddleware from './middleware/logginmiddleware';
import registerRouteMiddleware from './middleware/route.middleware';
import registerErrorHandlingMiddleware from './middleware/error.middleware';
import IRoute from './routes/index.routes';

class Server {

    server: express.Application;

    constructor(routes: IRoute[]) {
        this.server = express();
        this.registerMiddlewares();
        this.registerRoutes(routes);
        this.registerErrorHandlingMiddleware();
    }

    private registerMiddlewares() {
        registerCommonMiddleware(this.server);
        registerLogginMiddleware(this.server)
    }

    private registerRoutes(routes: IRoute[]) {
        registerRouteMiddleware(this.server, routes);
    }

    private registerErrorHandlingMiddleware() {
        this.server.use(registerErrorHandlingMiddleware);
    }

    listen() {
        this.server.listen(process.env.SERVER_PORT, ()=> {
            console.log(`Server running at http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
        })
    }

}

export default Server;