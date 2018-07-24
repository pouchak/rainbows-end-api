//server.js
const config = require('./config')
const express = require('express')
const bodyParser = require('body-parser');
const app = express();
var mongoose = require('mongoose');
mongoose.connect(config.mongo.url, {useNewUrlParser:true});
const userController = require('./user.js')
const avatarController = require('./avatar.js')
const loginController = require('./login.js')

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
app.post('/login',(req, res)=>{
    let plaintext = {
        username:req.body.username,
        password:req.body.password
    }
    userController.getUsername(plaintext)
    .then(user => loginController.compare(user, plaintext.password))
    .then(validatedUser =>{
        if(validatedUser.validated === false){
            res.sendStatus(403)
        }
        res.send(validatedUser)
    })
})*/

/*app.route('/user/:id')
.get((req, res)=>{
    console.log(req.params)
    userController.get({userId:req.params.id})
    .then((stuff)=>{
        res.send(stuff)
    })
})*/
/*
.post((req, res)=>{
    userController.create(req.body)
    .then((stuff)=>{
        res.send(stuff)
    })
})*/
//@TODO add error handling
/*.patch((req, res)=>{
    userController.update(req.body)
    .then((stuff)=>{
        res.send(stuff)
    })
})*/

//avatar
/*
app.route('/avatar')
.get((req, res)=>{
    avatarController.list()
    .then((stuff)=>{
        res.send(stuff)
    })
})
.post((req, res)=>{
    avatarController.create()
    .then((stuff)=>{
        res.send(stuff)
    })
})
app.route('/avatar/:id')
.get((req, res)=>{
    avatarController.get(req.body)
})
.patch((req, res)=>{
    avatarController.update(req.body)
    .then()
})*/

//listen
app.listen(config.server.port, ()=>{
    console.log(`listening on ${config.server.port}`)
})