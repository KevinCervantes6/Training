import 'dotenv/config';
import Server from './server';
import {Route} from './routes/index.routes';
import {Service} from './services/index.services';
import Posts from './models/posts.entity';
import Todo from './models/todo.entity';

//Create route
const postRoute = new Route().register('/posts', new Service(Posts));
const todoRoute = new Route().register('/todos', new Service(Todo));

//initialate server
const server = new Server(
    [
        postRoute,
        todoRoute
    ]
);

server.listen();