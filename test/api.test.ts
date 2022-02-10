/* eslint-disable func-names */
import request from 'supertest';
import assert from 'assert';

import app from '../src/app';

describe('API', function () {
  it('Returns 404 for an unknown endpoint', async function () {
    const response = await request(app).get('/doesntexist').expect(404);

    assert.deepEqual(response.body, { error: 'Unknown Endpoint' });
  });
  it('Returns 400 for a string parameter', async function () {
    const response = await request(app).get('/collections/foo').expect(400);

    assert.deepEqual(response.body, {
      message: 'Parameter must be a positive number.',
      status: 400,
    });
  });
  it('Returns 400 for a parameter less than 0', async function () {
    const response = await request(app).get('/collections/foo').expect(400);

    assert.deepEqual(response.body, {
      message: 'Parameter must be a positive number.',
      status: 400,
    });
  });
  it('Returns 404 for a resource not in the collection', async function () {
    const response = await request(app)
      .get('/collections/10000000000')
      .expect(404);

    assert.deepEqual(response.body, {
      message: 'Resource not found.',
      status: 404,
    });
  });
  it('Returns an image for a valid request', async function () {
    await request(app)
      .get('/collections/1')
      .expect(200)
      .expect('Content-Type', /image\/png/);
  });
});
