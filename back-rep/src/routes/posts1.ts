import express, { response } from 'express';
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

//Create a post
postsv1Router.post('/', async (req, res) => {
    const data = req.body;

    const newPost = getRepository(Posts).create(data);
    let [post, error] = await handleAsync(getRepository(Posts).save(newPost));

    if(error) return res.send(error);

    res.send(post);
});

//Read all posts
postsv1Router.get(`/`, async (req, res) => {
    let [post, error] = await handleAsync(getRepository(Posts).find());

    if(error) return res.send(error);

    res.send(post);
    //res.json(data.posts);
});

//Read a single post based on id
postsv1Router.get(`/:id`, async (req, res) => {
    const id = req.params.id;

    let [post, error] = await handleAsync(getRepository(Posts).findOne(id));
    if (error) return res.send(error);

    if (post) {
        res.send(post);
    } else {
        res.send(`No post found for ${id}`);
    }
});

//Update a single post based on id
postsv1Router.patch(`/:id`, async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    let [response, error] = await handleAsync(getRepository(Posts).update(id, data));
    if(error) return res.send(error);

    let [updatedPost, error2] = await handleAsync(getRepository(Posts).findOne(id));
    if(error2) return res.send(error2);

    if (updatedPost) {
        res.send(updatedPost);
    } else {
        res.send(`No post found for ${id}`);
    }
});

//Delete a single post based on id
postsv1Router.delete(`/:id`, async (req, res) => {
    const id = req.params.id;

    let [response, error] = await handleAsync(getRepository(Posts).delete(id));
    if(error) return res.send(error);

    if(response.affected === 1) {
        response.send( {deleted: true} );
    } else {
        res.send(`No post found for ${id}`);
    }
});

const handleAsync = (promise: Promise<any>) => {
    return promise
        .then( (data: any) => ([data, null]) )
        .catch( (error: any) => ([null, error]) )
}

export default postsv1Router;