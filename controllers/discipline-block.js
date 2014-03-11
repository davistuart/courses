/**
 * Manages discipline block resource
 *
 * @since:
 */
var express, mongoose, auth, router, Discipline;

express  = require('express');
mongoose = require('mongoose');
auth     = require('../lib/auth');

router     = express.Router();
Discipline = require('../models/discipline-block');

/**
 * Creates a new discipline block in database
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
 * List all discipline blocks in database
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
 * Get discipline block info in database
 *
 * @params:
 * @returns:
 * @throws:
 *
 * @since:
 * @author:
 */
router.get('/:disciplineBlockId', auth(), function (request, response, next) {
    //TODO implement function
});

/**
 * Updates discipline block info in database
 *
 * @params:
 * @returns:
 * @throws:
 *
 * @since:
 * @author:
 */
router.put('/:disciplineBlockId', auth(), function (request, response, next) {
    //TODO implement function
});

/**
 * Removes discipline block from database
 *
 * @params:
 * @returns:
 * @throws:
 *
 * @since:
 * @author:
 */
router.delete('/:disciplineBlockId', auth(), function (request, response, next) {
    //TODO implement function
});

module.exports = router;