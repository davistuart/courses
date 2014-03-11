/**
 * Manages catalog offering resource
 *
 * @since:
 */
var express, mongoose, auth, router, Catalog;

express  = require('express');
mongoose = require('mongoose');
auth     = require('../lib/auth');

router  = express.Router();
Catalog = require('../models/catalog');

/**
 * Creates a new catalog offering in database
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
 * List all catalog offerings in database
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
 * Get catalog offering info in database
 *
 * @params:
 * @returns:
 * @throws:
 *
 * @since:
 * @author:
 */
router.get('/:cataglogOfferingId', auth(), function (request, response, next) {
    //TODO implement function
});

/**
 * Updates catalog offering info in database
 *
 * @params:
 * @returns:
 * @throws:
 *
 * @since:
 * @author:
 */
router.put('/:cataglogOfferingId', auth(), function (request, response, next) {
    //TODO implement function
});

/**
 * Removes catalog offering from database
 *
 * @params:
 * @returns:
 * @throws:
 *
 * @since:
 * @author:
 */
router.delete('/:cataglogOfferingId', auth(), function (request, response, next) {
    //TODO implement function
});

module.exports = router;