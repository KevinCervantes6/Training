import express from 'express';
import registerCommonMiddleware from './middleware/commonmiddleware';
import registerLogginMiddleware from './middleware/logginmiddleware';
import registerRouteMiddleware from './middleware/route.middleware';
import registerErrorHandlingMiddleware from './middleware/error.middleware';
import { IRoute } from './routes/index.routes';
import { createConnection } from 'typeorm';
import config from './typeormconfig';

class Server {

    server: express.Application;

    constructor(routes: IRoute[]) {
        this.server = express();

        this.connectToPersistenceLayer();
        this.registerMiddlewares();
        this.registerRoutes(routes);
        this.registerErrorHandlingMiddleware();
    }

    private async connectToPersistenceLayer() {
        try {
            await createConnection(config);
            console.log('Persistence layer connected');
        } catch (error) {
            console.log('Persistence layer connection failed', error);
            return error;
        }
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