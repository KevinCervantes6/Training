import express from 'express';
import { getRepository } from 'typeorm';
import Users from '../models/users.entity';


let usersRouter = express.Router();

// let data = {
//     users: [
//         {name: 'Leanne Graham', email: 'Sincere@april.biz', address: {city: 'Gwenborough'}, phone: '1-770-736-8031', company: {name: 'Romaguera-Crist'}},
//         {name: 'Ervin Rowell', email: 'Shanna@melissa.tv', address: {city: 'Wisokyburg'}, phone: '810-692-6593', company: {name: 'Deckow-Crist'}}, 
//         {name: 'Clementine Bauch', email: 'Nathan@yesenia.net', address: {city: 'McKenziehaven'}, phone: '1-463-123', company: {name: 'Romaguera-Crist'}},
//     ]
// };

//Create a user
usersRouter.post('/', async (req, res) => {
    const data = req.body;

    const newUser = getRepository(Users).create(data);
    let [user, error] = await handleAsync(getRepository(Users).save(newUser));
    if(error) return res.send(error);

    res.send(user);
})

//Read all users
usersRouter.get('/', async (req, res) => {
    let [user, error] = await handleAsync(getRepository(Users).find({relations: ["address", "company"]}));

    if(error) return res.send(error);

    res.send(user);
    //res.json(data.posts);
});

//Read a single user based on id
usersRouter.get('/:id', async (req, res) => {
    const id = req.params.id;

    let [user, error] = await handleAsync(getRepository(Users).findOne(id, {relations: ["address", "company"]}));
    if (error) return res.send(error);

    if (user) {
        res.send(user);
    } else {
        res.send(`No user found for ${id}`);
    }
});

//Update a single user based on id
usersRouter.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const data = {id: id, ...req.body};

    //let [response, error] = await handleAsync(getRepository(Users).update(id, data));
    let [user, error] = await handleAsync(getRepository(Users).save(data));
    if(error) return res.send(error);

    let [updatedUser, error2] = await handleAsync(getRepository(Users).findOne(id, {relations: ["address", "company"]}));
    if(error2) return res.send(error2);

    if (updatedUser) {
        res.send(updatedUser);
    } else {
        res.send(`No user found for ${id}`);
    }
});

//Delete a single user based on id
usersRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;

    let [response, error] = await handleAsync(getRepository(Users).delete(id));
    if(error) return res.send(error);

    if(response.affected === 1) {
        response.send( {deleted: true} );
    } else {
        res.send(`No user found for ${id}`);
    }
});

const handleAsync = (promise: Promise<any>) => {
    return promise
        .then( (data: any) => ([data, null]) )
        .catch( (error: any) => ([null, error]) )
}

export default usersRouter;