import chai from 'chai';
import 'chai/register-should';

import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);

const { should, expect } = chai;
should();


describe('POST /api/v1/property', () => {
  it('it should create a property advert', (done) => {
    chai.request(app)
      .post('/api/v1/property')
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).be.an('object');
        expect(res.body.message).to.equal('Property Ad posted successfully');
        done();
      });
  });
});

describe('/PATCH update property data', () => {
  it('user can update any category of the property data', (done) => {
    const id = 1;
    chai.request(app)
      .patch(`/api/v1/property/${id}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body.message).to.equal('property data successfully updated');
        done();
      });
  });
});
describe('/PATCH mark property as sold', () => {
  it('it should mark property as sold', (done) => {
    const id = 1;
    chai.request(app)
      .patch(`/api/v1/property/${id}/sold`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body.message).to.equal('property successfully marked as sold');
        done();
      });
  });
});
describe('/GET /api/v1/property', () => {
  it('it should get all property adverts', (done) => {
    chai.request(app)
      .get('/api/v1/property')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).be.an('object');
        expect(res.body.message).to.equal('All Property Ads retrieved successfully.');
        done();
      });
  });
});
describe('/GET a property by their id', () => {
  it('it should get a specific property by the given id', (done) => {
    const id = 1;
    chai.request(app)
      .get(`/api/v1/property/${id}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).be.an('object');
        expect(res.body.message).to.equal('Property Ad retrieved successfully.');
        done();
      });
  });
});

describe('/DELETE a property by their id', () => {
  it('it should delete a property by their id', (done) => {
    const id = 1;
    chai.request(app)
      .delete(`/api/v1/property/${id}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('Property advert deleted successfully');
        done();
      });
  });
});
