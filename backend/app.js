const express = require('express');
const app = express();
app.use(express.json())

const { mongoose } = require('./db/mongoose');

const { Blog } = require('./db/models');


// CORS HEADERS MIDDLEWARE
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );

    next();
});

app.get('/blogs', (req, res)=>{
    Blog.find({}).then((blogs)=>{
        res.send(blogs)
    })
})

app.get('/blogs/:id', (req, res)=>{
    Blog.findOne({_id: req.params.id}).then((blog)=>{
        res.send(blog)
    })
})

app.post('/blogs', (req, res)=>{
    let title = req.body.title;
    let description = req.body.description;
    let newBlog = new Blog({
        title,
        description
    });
    newBlog.save().then((blogDoc) => {
        res.send(blogDoc);
    })
})

app.patch('/blogs/:id', (req, res)=>{
    Blog.findOneAndUpdate({_id: req.params.id}, {
        $set: req.body
    }).then(()=>{
        res.sendStatus(200)
    })
})

app.delete('/blogs/:id', (req, res)=>{
    Blog.findOneAndRemove({_id: req.params.id}).then((blog)=>{
        res.send(blog)
    })
})

app.listen(3000, ()=>{
    console.log('Server is listening on port 3000');
})