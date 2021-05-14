import express from 'express';
import { getRepository } from 'typeorm';
import Posts from '../models/posts.entity';

let postsv1Router = express.Router();

let data = {
    posts: [
        {id: 1, userId: 1, title: 'sunt aut facere', body: 'sunt aut facere...'},
        {id: 2, userId: 1, title: 'qui est esse', body: 'qui est esse...'},
        {id: 3, userId: 1, title: 'ea molestias quasi', body: 'ea molestias quasi...'}
        
    ]
};

postsv1Router.post('/', async (req, res) => {
    const data = req.body;

    const newPost = getRepository(Posts).create(data);
    let [post, error] = await handleAsync(getRepository(Posts).save(newPost));

    if(error) return res.send(error);

    res.send(post);
});

postsv1Router.get(`/`, async (req, res) => {
    let [post, error] = await handleAsync(getRepository(Posts).find());

    if(error) return res.send(error);

    res.send(post);
    //res.json(data.posts);
});

postsv1Router.get(`/:id`, (req, res) => {
    let post = data.posts.filter( (item) => item.id.toString() === req.params.id );
    res.json(post[0]);
});

postsv1Router.post(`/`, (req, res) => {
    res.json('Creating from v1');
});

postsv1Router.patch(`/`, (req, res) => {
    res.json('Patching from v1');
});

postsv1Router.delete(`/`, (req, res) => {
    res.json('Deleting from v1');
});

const handleAsync = (promise: Promise<any>) => {
    return promise
        .then( (data: any) => ([data, null]) )
        .catch( (error: any) => ([null, error]) )
}

export default postsv1Router;