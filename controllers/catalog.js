/**
 * Manages catalog resource
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
 * Creates a new catalog in database
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
 * List all catalogs in database
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
 * Get catalog info in database
 *
 * @params:
 * @returns:
 * @throws:
 *
 * @since:
 * @author:
 */
router.get('/:cataglogId', auth(), function (request, response, next) {
    //TODO implement function
});

/**
 * Updates catalog info in database
 *
 * @params:
 * @returns:
 * @throws:
 *
 * @since:
 * @author:
 */
router.put('/:cataglogId', auth(), function (request, response, next) {
    //TODO implement function
});

/**
 * Removes catalog from database
 *
 * @params:
 * @returns:
 * @throws:
 *
 * @since:
 * @author:
 */
router.delete('/:cataglogId', auth(), function (request, response, next) {
    //TODO implement function
});

module.exports = router;