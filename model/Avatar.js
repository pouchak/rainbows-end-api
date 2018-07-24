var mongoose = require('mongoose');
//var Schema = mongoose.Schema;

const avatarSchema = mongoose.Schema({
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
  module.exports = Avatar