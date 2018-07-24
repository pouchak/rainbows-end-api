
var mongoose = require('mongoose');
const Login = require('./login.js')
//const sampleId = '5b4d26120f7f660a9ff51af7';

  const usersSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    firstName: {
        type: String
    },
    lastName: String,
    email: String,
    
  })
const Users = mongoose.model('Users', usersSchema);


const newUser = (options) =>{
    return new Promise((resolve, reject)=>{
        let user = {
            username:options.username,
            validatedUsername:options.confirmUsername,
            password:options.password,
            validatedPassword: options.confirmPassword
        }
        Login.validate(user)
        .then(Login.create)
        .then(hash => {
            Users.create({
                username:options.username,
                password:hash,
            }, (err, res)=>{
                if(err){
                    reject(err)
                }
                resolve(res)
            })
        })
        .catch(reason => {console.log(`${reason}`)})
    })
}
const getUserById = (options) => {
    return new Promise((resolve, reject)=>{
        Users.findById(options.userId, (err, res)=>{
            if(err){
                reject(err);
            }
            resolve(res);
        })
    })
}
const getUserByUsername = (options)=>{
     return new Promise((resolve, reject)=>{
         Users.findOne({username:options.username}, (err, res)=>{
             if(err){
                 reject(err);
             }
             resolve(res);
        })
     })
    
}

const updateUser = (options) => {
    return new Promise((resolve, reject) => {
        //resolve({message:'user updated'})
        Users.findOneAndUpdate(options.id, options.updateObject, (err, res)=>{
            if(err){
                reject(err)
            }
            resolve(res);
        })
    })
}
module.exports = {
    create : newUser,
    get : getUserById,
    getUsername: getUserByUsername,
    update: updateUser
}