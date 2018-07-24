var mongoose = require('mongoose');


const AvatarSchema = mongoose.Schema({
    name:{
        type: String,
        unique: true
    },
    url: {
        type: String,
        unique: true
    }
  })
  const Avatar = mongoose.model('Avatar', AvatarSchema);

  const createAvatar = ()=>{
    return new Promise((resolve, reject)=>{
        resolve({message:'avatar created'})
    })
  }

module.exports = {
    create: createAvatar
}