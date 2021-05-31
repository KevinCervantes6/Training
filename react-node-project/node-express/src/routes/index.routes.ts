import express, {Request, Response, Router, NextFunction} from 'express';
import {handleAsync} from '../shared/utilities';
import {IService, Service} from '../services/index.services'; 

interface IRoute {
    api: string;
    router: any;
}

class Route implements IRoute {

    api!: string;
    router: Router = express.Router();
    service!: IService;

    register = (api: string, service: IService): IRoute => {
        this.api = api;
        this.service = service;

        this.router.post('/', this.post);
        this.router.get('/', this.get);
        this.router.get('/:id', this.getOne);
        this.router.patch('/:id', this.patch);
        this.router.delete('/:id', this.delete);
        
        return this;
    }

    protected post = async (request: Request, response: Response) => {

        const data = request.body;
        let [newItem, error] = await handleAsync(this.service.create(data));
        if(error) return response.send(error);
        response.json(newItem);
    };

    protected get = async(request: Request, response: Response, next: NextFunction) => {

        let [items, error] = await handleAsync(this.service.find());
        if(error) return response.send(error);
        response.send(items);
    }

    protected getOne = async(request: Request, response: Response, next: NextFunction) => {

        const id = request.params.id;
        let [items, error] = await handleAsync(this.service.findOne(id));
        if(error) return response.send(error);

        if (items) {
            response.send(items);  
        } else {
            response.send(`No item found for ${id}`);
        }         
    }

    protected patch = async(request: Request, response: Response, next: NextFunction) => {

        const id = request.params.id;
        const data = request.body;

        let [updatedItem, error] = await handleAsync(this.service.update(id, data));
        
        if(error) return response.send(error);
        if (updatedItem) {
            response.send(updatedItem);
        } else {
            response.send(`No item found for ${id}`);
        }
    }

    protected delete = async(request: Request, response: Response, next: NextFunction) => {

        const id = request.params.id;

        let [deleteResponse, error] = await handleAsync(this.service.delete(id));
        
        if(error) return response.send(error);
        if(deleteResponse.affected === 1) {
            response.json( {deleted: true} );
        } else {
            response.send(`No item found for ${id}`);
        }
        }

}

export  {IRoute, Route};