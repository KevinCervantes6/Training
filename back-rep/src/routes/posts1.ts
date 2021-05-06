import express from 'express';
import cors from 'cors';

let postsv1Router = express.Router();

let data = {
    posts: [
        {id: 1, userId: 1, title: 'sunt aut facere', body: 'sunt aut facere...'},
        {id: 2, userId: 1, title: 'qui est esse', body: 'qui est esse...'},
        {id: 3, userId: 1, title: 'ea molestias quasi', body: 'ea molestias quasi...'}
        
    ]
};

postsv1Router.get(`/`, (req, res) => {
    res.json(data.posts);
});

postsv1Router.get(`/:id`, (req, res) => {
    let post = data.posts.filter( (item) => item.id.toString() === req.params.id );
    res.json(post);
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

export default postsv1Router;