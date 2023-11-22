const chai = require('chai');
const chaiHttp = require('chai-http');
const { connectToMongoDB } = require('../connect'); // Update the path accordingly
const app = require('../index'); // Update the path accordingly

const { expect } = chai;
chai.use(chaiHttp);

// Assuming you have a function to clear the test database
before(async () => {
  await connectToMongoDB('mongodb://localhost:27017/test-short-url'); // Use a different test database
  // Clear the test database or set it up as needed
});

describe('URL Shortener API', () => {
  it('should shorten a URL', (done) => {
    chai
      .request(app)
      .post('/shorten')
      .send({ longUrl: 'https://example.com' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('shortUrl');
        done();
      });
  });

  it('should handle missing longUrl during URL shortening', (done) => {
    chai
      .request(app)
      .post('/shorten')
      .send({})
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.have.property('error').that.equals('Missing longUrl in the request body');
        done();
      });
  });

  it('should redirect to the original URL', (done) => {
    chai
      .request(app)
      .get('/your-short-id') // Replace with an actual short ID from your database
      .end((err, res) => {
        expect(res).to.redirectTo('https://original-url.com');
        done();
      });
  });

  // Add more test cases as needed
});

// Assuming you have a function to close the database connection
after(async () => {
  // Close the database connection or perform cleanup tasks
});
