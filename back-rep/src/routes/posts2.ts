import express from 'express';

let postsv2Router = express.Router();

let data = {
    posts: [
        {id: 1, userId: 1, title: 'sunt aut facere', body: 'sunt aut facere...'},
        {id: 2, userId: 1, title: 'qui est esse', body: 'qui est esse...'},
        {id: 3, userId: 1, title: 'ea molestias quasi', body: 'ea molestias quasi...'}
        
    ]
};

postsv2Router.get('/', (req, res) => {
    res.json(data.posts);
});

postsv2Router.post('/', (req, res) => {
    res.json('Creating from v1');
});

postsv2Router.patch('/', (req, res) => {
    res.json('Patching from v1');
});

postsv2Router.delete('/', (req, res) => {
    res.json('Deleting from v1');
});

export default postsv2Router;