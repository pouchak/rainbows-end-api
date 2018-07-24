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
    lastName: String,
    email: String
  })
  const Auth = mongoose.model('Users', usersSchema);
  module.exports = Auth;