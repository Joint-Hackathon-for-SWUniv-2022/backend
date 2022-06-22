const { request } = require('express');
const supertest = require('supertest');
const app = require('../src/index');

describe('GET /', function() {
    it('respond', function(done) {
        supertest(app).get('/').expect('Root', done);
    })
})