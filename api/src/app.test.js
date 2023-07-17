import {
  // eslint-disable-next-line no-unused-vars
  jest,
  // eslint-disable-next-line no-unused-vars
  test,
  describe,
  expect,
  it,
} from '@jest/globals';
import request from 'supertest';
// const request = require("supertest");
import app from './app.js';

describe('Test the root path', () => {
  it('should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('should respond with 200 status code when posted', async () => {
    const response = await request(app).post('/').send({ test: 123 });
    expect(response.statusCode).toBe(200);
  });

  it('should throw an error when POST has no data', async () => {
    const response = await request(app).post('/');
    expect(response.statusCode).toBe(400);
  });
});
