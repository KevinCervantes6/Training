import express from 'express';

import postsv1Router from './routes/posts1';
import postsv2Router from './routes/posts2';
import usersRouter from './routes/users';

const server = express();
const port = 3000;

//logging middleware
server.use( (req, res, next) => {
    console.log('${req.method} ${req.path}');
    next();
});

//register routes
server.use('/posts', postsv1Router);
server.use('/users', usersRouter);

server.get('/', (req, res) => {
    res.send('Greetings');
});

server.listen(port, () => {
    console.log('Server running at http://localhost:${port}');
});