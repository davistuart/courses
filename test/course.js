var request, app;

require('should');

request = require('supertest');
app     = require('../index.js');

describe('create course', function () {
    it('should not create with invalid credentials', function (next) {
        // TODO
        next();
    });

    it('should create with valid credentials', function (next) {
        var course = {
            "id": "42"
            , "name": "Ciência da Computação"
            , "level": "G"
            , "area": "Exatas"
            , "qualification": "A"
            , "credits": 200
        };
        request(app)
            .post('/courses')
            .send(course)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(error, response) {
                if (error) {
                    next(error);
                } else {
                    next();
                }
            });
    });
});

describe('list course', function () {
    it('should not list with invalid credentials', function (next) {
        // TODO
        next();
    });

    it('should list', function (next) {
        request(app)
            .get('/courses')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, next);
    });
});

describe('show course', function () {
    it('should not show with invalid credentials', function (next) {
        // TODO
        next();
    });

    it('should show', function (next) {
        // TODO
        next();
    });
});

describe('update course', function () {
    it('should not update with invalid credentials', function (next) {
        // TODO
        next();
    });

    it('should update', function (next) {
        // TODO
        next();
    });
});

describe('remove course', function () {
    it('should not remove with invalid credentials', function (next) {
        // TODO
        next();
    });

    it('should remove', function (next) {
        // TODO
        next();
    });
});