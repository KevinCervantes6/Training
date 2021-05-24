import express from 'express';
import IRoute from './index.routes';

class PostsRoute implements IRoute {

    api = '/posts';
    router = express.Router();
}

export default PostsRoute;