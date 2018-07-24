var mongoose = require('mongoose');
//var Schema = mongoose.Schema;

const usersSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type:String
    }
  })
  const Users = mongoose.model('Users', usersSchema);
  module.exports = Users