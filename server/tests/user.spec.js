import chai from 'chai';
import 'chai/register-should';

import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);

const { should, expect } = chai;
should();

describe('POST auth/signup', () => {
  it('should create a new user', (done) => {
    const validUser = {
      firstName: 'Chioma',
      lastName: 'Umeh',
      email: 'chiomab@yahoo.com',
      address: '23 Broad Street, Lagos',
      password: '12345',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(validUser)
      .end((err, res) => {
        expect(res).to.have.status(201);
        res.body.should.be.a('object');
        expect(res.body.message).to.equal('Account created successfully.');
        done();
      });
  });
});
describe('POST auth/signin', () => {
  it('should not signin an existing user if users email does not exist', (done) => {
    const existingUser = {
      email: 'chiomab@yahoo.com',
      password: '12345',
    };
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(existingUser)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).be.an('object');
        done();
      });
  });
});
