/**
 * Manages discipline offering resource
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
 * Creates a new discipline offering in database
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
 * List all discipline offerings in database
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
 * Get discipline offering info in database
 *
 * @params:
 * @returns:
 * @throws:
 *
 * @since:
 * @author:
 */
router.get('/:disciplineOfferingId', auth(), function (request, response, next) {
    //TODO implement function
});

/**
 * Updates discipline offering info in database
 *
 * @params:
 * @returns:
 * @throws:
 *
 * @since:
 * @author:
 */
router.put('/:disciplineOfferingId', auth(), function (request, response, next) {
    //TODO implement function
});

/**
 * Removes discipline offering from database
 *
 * @params:
 * @returns:
 * @throws:
 *
 * @since:
 * @author:
 */
router.delete('/:disciplineOfferingId', auth(), function (request, response, next) {
    //TODO implement function
});

module.exports = router;