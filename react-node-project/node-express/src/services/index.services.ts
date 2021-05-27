import {getRepository} from 'typeorm';
import {handleAsync} from '../shared/utilities';

interface IService {
    create: (data: any) => Promise<any>;
    find: () => Promise<any>;
    findOne: (id: string) => Promise<any>;
    update: (id: string, data: any) => Promise<any>;
    delete: (id: string) => Promise<any>;
}

class Service implements IService {

    create = async(data: any) => {
        const newItem = getRepository(Posts).create(data);
        let [item, error] = await handleAsync(getRepository(Posts).save(newItem));

        if(error) return new Error(error.message);

    }

    find = async() => {
        let [item, error] = await handleAsync(getRepository(Posts).find());
        if(error) return new Error(error.message);

        return item;
    
    }

    findOne = async(id: string) => {

        let [item, error] = await handleAsync(getRepository(Posts).findOne(id));
        if (error) return new Error(error.message);

        return item;
    }

    update = async(id: string, data: any) => {

        let [response, error] = await handleAsync(getRepository(Posts).update(id, data));
        if(error) return new Error(error.message);

        let [updatedItem, error2] = await handleAsync(getRepository(Posts).findOne(id));
        if(error2) return new Error(error2.message);

        return updatedItem;

    }

    delete = async(id: string) => {
        let [response, error] = await handleAsync(getRepository(Posts).delete(id));
        if(error) return new Error(error.message);
    }
}

export {IService};