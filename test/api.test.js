/* eslint-disable func-names */
import request from 'supertest';
import assert from 'assert';

import app from '../src/app.js';

describe('API', function () {
  it('Returns 404 for an unknown endpoint', async function () {
    const response = await request(app).get('/doesntexist').expect(404);

    assert.deepEqual(response.body, { error: 'Unknown Endpoint' });
  });
});
