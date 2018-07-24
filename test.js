//test.js
const http = require('http')
const server = require('./server.js')
const assert = require('assert')
const getFile = require('./getFile')
const user = require('./user')

describe('endpoint tests', function(done){
    before(function(){
        server.listen(3000)
    })
   
    it.skip('should return done', function(done){
        http.get('http://localhost:3000/'), function(res){
            assert.equal(200, res.statusCode)
            return done();
        }
        
    })
    after(function(){
        server.close()
    })
})
describe('getFile', function(done){
    it('should return done', function(done){
        return getFile.read('hello.txt', function(err, res){
            assert.equal('hello!', res)
            done()
        })
    })
})
describe('user', function(done){
    it('should return done', function(done){
        return user.get('evan', function(err, res){
            //assert.equal('12345', res.id);
            done()
        })
    })
})