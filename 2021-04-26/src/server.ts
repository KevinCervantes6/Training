import express from 'express';

import postsv1Router from './routes/posts1';
import postsv2Router from './routes/posts2';
import usersRouter from './routes/users';

const server = express();
const port = 3000;

server.get('/', (req, res) => {
    res.send('Greetings');
});

//register routes
server.use('/v1/posts', postsv1Router);
server.use('/v2/posts', postsv2Router);
server.use('/v1/users', usersRouter);

server.listen(port, () => {
    console.log('Server running at http://localhost:${port}');
});