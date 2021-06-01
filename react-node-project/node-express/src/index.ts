import 'dotenv/config';
import Server from './server';
import {Route} from './routes/index.routes';
import {Service} from './services/index.services';
import Posts from './models/posts.entity';
import Todo from './models/todo.entity';
import Company from './models/company.entity';

//Create route
const postRoute = new Route().register('/api/posts', new Service(Posts));
const todoRoute = new Route().register('/api/todos', new Service(Todo));
const companyRoute = new Route().register('/api/company', new Service(Company));

//initialate server
const server = new Server(
    [
        postRoute,
        todoRoute,
        companyRoute
    ]
);

server.listen();