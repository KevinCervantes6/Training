import express from 'express';

const registerLogginMiddleware = (server: express.Application) => {

    //login middleware
    server.use( (req, res, next) => {
        console.log(`${req.method} ${req.path}`);
        next();
    });

}

export default registerLogginMiddleware;