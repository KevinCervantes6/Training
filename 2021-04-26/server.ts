import express from 'express';

const server = express();
const port = 3000;

server.get('/', (req, res) => {
    res.send('Hello World from Express');
});

server.get('/info', (req, res) => {
    res.send('Info from Express');
});

server.listen(port, () => {
    console.log('Server running at http://$localhost:${port}');
});