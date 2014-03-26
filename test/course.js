var request, app;

require('should');

request = require('supertest');
app     = require('../index.js');

describe('create course', function () {
    it('should not create with invalid credentials', function (next) {
        // TODO
        next();
    });

    it('should not create without required fields', function (next) {
        var course = {};
        request(app)
            .post('/courses')
            .send(course)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(500)
            .end(function(error, response) {
                if (error) {
                    next(error);
                } else {
                    next();
                }
            });
    });

    it('should create with valid credentials', function (next) {
        var course = {
            "codigo": "42",
            "nome": "Ciência da Computação",
            "nivel": "G",
            "area": "Exatas",
            "habilitacao": "A"
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

describe('show course', function () {
    it('should not show with invalid credentials', function (next) {
        // TODO
        next();
    });

    it('should not find the course', function (next) {
        request(app)
            .get('/courses/5324c3d7a26c43d84defde12')
            .set('Accept', 'application/json')
            .expect('Content-Type', /plain/)
            .expect(404)
            .end(function(error, response) {
                if (error) {
                    next(error);
                } else {
                    next();
                }
            });
    });

    it('should show', function (next) {
        var course = {
            "codigo": "42",
            "nome": "Ciência da Computação",
            "nivel": "G",
            "area": "Exatas",
            "habilitacao": "A"
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
                    request(app)
                        .get('/courses/' + response.body._id)
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
                }
            });
    });
});

describe('update course', function () {
    it('should not update with invalid credentials', function (next) {
        // TODO
        next();
    });

    it('should not find the course', function (next) {
        request(app)
            .put('/courses/5324c3d7a26c43d84defde12')
            .set('Accept', 'application/json')
            .expect('Content-Type', /plain/)
            .expect(404).end(function(error, response) {
                if (error) {
                    next(error);
                } else {
                    next();
                }
            });
    });

    it('should update', function (next) {
        var course = {
            "codigo": "42",
            "nome": "Ciência da Computação",
            "nivel": "G",
            "area": "Exatas",
            "habilitacao": "A"
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
                    var course = {
                        "codigo": "42",
                        "nome": "Ciência da Computação 2",
                        "nivel": "G",
                        "area": "Exatas",
                        "habilitacao": "A"
                    };

                    request(app)
                        .put('/courses/' + response.body._id)
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
                }
            });
    });
});

describe('remove course', function () {
    it('should not remove with invalid credentials', function (next) {
        // TODO
        next();
    });

    it('should not find the course', function (next) {
        request(app)
            .del('/courses/5324c3d7a26c43d84defde12')
            .set('Accept', 'application/json')
            .expect('Content-Type', /plain/)
            .expect(404)
            .end(function(error, response) {
                if (error) {
                    next(error);
                } else {
                    next();
                }
            });
    });

    it('should remove', function (next) {
        var course = {
            "codigo": "42",
            "nome": "Ciência da Computação",
            "nivel": "G",
            "area": "Exatas",
            "habilitacao": "A"
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
                    request(app)
                        .del('/courses/' + response.body._id)
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
                }
            });
    });
});