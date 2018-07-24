//getFile.js
const fs = require('fs');

const readFile = function(name, callback){
 fs.readFile(name, 'utf8', function(err, data){
     callback(null, data)
 })

}
module.exports = {
    read:readFile
}