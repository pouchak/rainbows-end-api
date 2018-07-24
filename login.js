const bcrypt = require('bcrypt');
const saltRounds = 10;

const validatePassword = (options)=>{
    return new Promise((resolve, reject)=>{
        if(options.username !== options.validatedUsername){
            reject({message:"usernames did not match."})
        }else if(options.password !== options.validatedPassword){
            reject({message:"passwords did not match."})
        }else{
            resolve(options);
        }
    })
}

/*
    createPassword : create a password has with bcrypt
    options.username - username of user
    options.usernamevalidate - validate username
    options.password - pw of user
    options.passwordvalidate - validate password
    */
const createPassword = (options)=>{
    return new Promise((resolve, reject)=>{
        bcrypt.genSalt(saltRounds, (err, salt)=> {
            bcrypt.hash(options.password, salt, (err, hash)=> {
                resolve(hash)
            });
        });
});
}
const comparePassword = (options, plaintext)=>{
    return new Promise((resolve, reject)=>{
        bcrypt.compare(plaintext, options.password, (err, res)=> {
            let validatedUser = {
                username : options.username,
                password : options.password,
                validated : res
            }
            resolve(validatedUser)
        });
    })
}

module.exports = {
    create : createPassword,
    validate : validatePassword,
    compare: comparePassword
}

