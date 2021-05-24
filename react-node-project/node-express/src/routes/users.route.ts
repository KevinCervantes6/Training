import express from 'express';
import IRoute from './index.routes';

class UsersRoute implements IRoute {

    api = '/users';
    router = express.Router();
}

export default UsersRoute;