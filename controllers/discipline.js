/**
 * Manages discipline resource
 *
 * @since:
 */
var express, mongoose, auth, router, Discipline;

express  = require('express');
mongoose = require('mongoose');
auth     = require('../lib/auth');

router     = express.Router();
Discipline = require('../models/discipline');

/**
 * Creates a new discipline in database
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
 * List all disciplines in database
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
 * Get discipline info in database
 *
 * @params:
 * @returns:
 * @throws:
 *
 * @since:
 * @author:
 */
router.get('/:disciplineId', auth(), function (request, response, next) {
    //TODO implement function
});

/**
 * Updates discipline info in database
 *
 * @params:
 * @returns:
 * @throws:
 *
 * @since:
 * @author:
 */
router.put('/:disciplineId', auth(), function (request, response, next) {
    //TODO implement function
});

/**
 * Removes discipline from database
 *
 * @params:
 * @returns:
 * @throws:
 *
 * @since:
 * @author:
 */
router.delete('/:disciplineId', auth(), function (request, response, next) {
    //TODO implement function
});

module.exports = router;