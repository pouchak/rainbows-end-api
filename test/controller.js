//controller.js
const userController = require('../controllers/user.js')

const chai = require('chai')
const expect = chai.expect;


describe('controller tests', function(){
    describe('User controller', function(){
        describe('get', function(){
            it('should be a function', function(done){
                expect(typeof userController.get).to.equal('function');
                done()
            })
        })
    })
})