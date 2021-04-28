import express from 'express';

let usersRouter = express.Router();

let data = {
    users: [
        {name: 'Leanne Graham', email: 'Sincere@april.biz', address: {city: 'Gwenborough'}, phone: '1-770-736-8031', company: {name: 'Romaguera-Crist'}},
        {name: 'Ervin Rowell', email: 'Shanna@melissa.tv', address: {city: 'Wisokyburg'}, phone: '810-692-6593', company: {name: 'Deckow-Crist'}}, 
        {name: 'Clementine Bauch', email: 'Nathan@yesenia.net', address: {city: 'McKenziehaven'}, phone: '1-463-123', company: {name: 'Romaguera-Crist'}},
    ]
};

usersRouter.get('/', (req, res) => {
    res.json(data.users);
});

export default usersRouter;