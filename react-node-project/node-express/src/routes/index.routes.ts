import express, {Request, Response, Router} from 'express';
import {handleAsync} from '../shared/utilities';

interface IRoute {
    api: string;
    router: any;
}

class Route implements IRoute {

    api!: string;
    router: Router = express.Router();

    post = async (request: Request, response: Response) => {

        const data = request.body;
        let [newItem, error] = await handleAsync();
        if(error) return response.send(error);
        response.json(newItem);
    });
}

export  {IRoute, Route};