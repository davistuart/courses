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
router.post('/', auth(), function (request, response, next) {
    //TODO implement function
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
router.get('/', auth(), function (request, response, next) {
    //TODO implement function
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
router.get('/:courseId', auth(), function (request, response, next) {
    //TODO implement function
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
router.put('/:courseId', auth(), function (request, response, next) {
    //TODO implement function
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
router.delete('/:courseId', auth(), function (request, response, next) {
    //TODO implement function
});

module.exports = router;