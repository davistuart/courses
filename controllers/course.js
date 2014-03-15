/**
 * Manages courses resource
 *
 * @since:
 */
var express, mongoose, auth, router, Course;

express  = require('express');
mongoose = require('mongoose');
auth     = require('../lib/auth');

router = express.Router();
Course = require('../models/course');

/**
 * Creates a new course in database
 *
 * @params:
 * @returns:
 * @throws:
 *
 * @since:
 * @author:
 */
router.post('/', function (request, response, next) {
    var item = request.body;
    console.log('Adding course: ' + JSON.stringify(item));

    var course = new Course(item);
    course.save(function(error, resource) {
        if (error) {
            response.send(500, {error: error});
        } else {
            console.log('Success: ' + JSON.stringify(resource));
            response.send(resource);
        }
    });
});

/**
 * List all courses in database
 *
 * @params:
 * @returns:
 * @throws:
 *
 * @since:
 * @author:
 */
router.get('/', function (request, response, next) {
    console.log('Retrieving all courses');
    Course.find({}, function(error, resource) {
        if (error) {
            response.send(500, {error: error});
        }
        else {
            response.send(resource);
        }

    });
});

/**
 * Get course info in database
 *
 * @params:
 * @returns:
 * @throws:
 *
 * @since:
 * @author:
 */
router.get('/:courseId', function (request, response, next) {
    var id = request.params.courseId;
    console.log('Retrieving course: ' + id);

    Course.findById(id, function(error, resource) {
        if (error) {
            response.send(500, {error: error});
        }
        else if (resource) {
            response.send(resource);
        }
        else {
            response.send(404);
        }
    });
});

/**
 * Updates course info in database
 *
 * @params:
 * @returns:
 * @throws:
 *
 * @since:
 * @author:
 */
router.put('/:courseId', function (request, response, next) {
    var id = request.params.courseId;
    var item = request.body;
    item.updated_at = new Date;

    console.log('Updating course: ' + id);
    console.log(JSON.stringify(item));

    Course.findByIdAndUpdate(id, item, function(error, resource) {
        if (error) {
            response.send(500, {error: error});
        }
        else if (resource) {
            response.send(resource);
        }
        else {
            response.send(404);
        }
    });
});

/**
 * Removes course from database
 *
 * @params:
 * @returns:
 * @throws:
 *
 * @since:
 * @author:
 */
router.delete('/:courseId', function (request, response, next) {
    var id = request.params.courseId;
    console.log('Deleting course: ' + id);

    Course.findByIdAndRemove(id, function (error, resource) {
        if (error) {
            console.log('Error deleting course: ' + error);
            response.send(500, {error: error});
        }
        else if (resource) {
            console.log('document deleted');
            response.send(resource);
        }
        else {
            response.send(404);
        }
    });
});

module.exports = router;