const chai = require('chai')
const chaiHttp = require('chai-http')
let server = require('../server');
const expect = chai.expect;
chai.use(chaiHttp)


describe('endpoint tests', function(){
    describe('healthcheck', function(){
        it('should return 200', function(done){
            chai.request(server)
            .get('/health')
            .end((err, res)=>{
                expect(err).to.not.exist;
                expect(res).to.have.status(200);
                done()
            })
        })
    })
})