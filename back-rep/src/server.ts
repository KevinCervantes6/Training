import express from 'express';

import 'dotenv/config';
import postsv1Router from './routes/posts1';
import { createConnection } from 'typeorm';
import usersRouter from './routes/users';
import cors from 'cors';
import config from './typeormconfig';

const server = express();
const port = process.env.SERVER_PORT;

//connect to database
async function connectToDB( ) {
  try  {
        await createConnection(config);
        console.log('Persistence layer connected');
    } catch(error) {
        console.log('Persistence layer failed: ', error);
        return error;
    }
}
connectToDB();

//Set cors headers
server.use(cors());

//logging middleware
server.use( (req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

//register routes
server.use(`/posts`, postsv1Router);
server.use(`/users/`, usersRouter);

server.get(`/`, (req, res) => {
    res.send('Greetings');
});

//error handling
server.use( (error: any, req: any, res: any, next: any) => {
    console.log('Persistence layer failed: ', error);
    res.send('Unhandled error. ');
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});