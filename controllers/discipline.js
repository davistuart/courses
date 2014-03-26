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
DisciplineOffering = require('../models/discipline-offering');

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
router.post('/', function (request, response, next) {
    //TODO implement function
});

/**
 * Creates a new discipline offering in database
 *
 * @params:
 * @returns:
 * @throws:
 *
 * @since: 2014-03-23
 * @author: Davi Stuart Zilli
 */
router.post('/:disciplineId/offerings', function (request, response, next) {
    var item = request.body;
    console.log('Adding discipline offering: ' + JSON.stringify(item));

    var disciplineoffering = new DisciplineOffering(item);
    disciplineoffering.save(function(error, resource) {
        if (error) {
            console.log('Error: ' + error);
            response.send(500, {error: error});
        } else {
            console.log('Success: ' + JSON.stringify(resource));
            response.send(resource);
        }
    });
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
router.get('/', function (request, response, next) {
    //TODO implement function
});

/**
 * List all discipline offerings in database
 *
 * @params:
 * @returns:
 * @throws:
 *
 * @since: 2014-03-23
 * @author: Davi Stuart Zilli
 */
router.get('/:disciplineId/offerings/:disciplineOfferingId', function (request, response, next) {
    var disciplineId = request.params.disciplineId;
    var disciplineOfferingId = request.params.disciplineOfferingId;
    console.log('Retrieving disciplines offering with id ' + disciplineId + 'and discipline id ' + disciplineOfferingId);
    console.log('Retrieving all disciplines offering');
    DisciplineOffering.find({ id : disciplineOfferingId, idDiscipline : disciplineId }, function(error, resource) {
        if (error) {
            console.log('Error: ' + error);
            response.send(500, {error: error});
        }
        else {
            console.log('Success: ' + JSON.stringify(resource));
            response.send(resource);
        }

    });
});

/**
 * List all discipline offerings in database
 *
 * @params:
 * @returns:
 * @throws:
 *
 * @since: 2014-03-23
 * @author: Davi Stuart Zilli
 */
router.get('/:disciplineId/offerings', function (request, response, next) {
    console.log('Retrieving all disciplines offering');
    DisciplineOffering.find({}, function(error, resource) {
        if (error) {
            console.log('Error: ' + error);
            response.send(500, {error: error});
        }
        else {
            console.log('Success: ' + JSON.stringify(resource));
            response.send(resource);
        }

    });
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
router.get('/:disciplineId', function (request, response, next) {
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
router.put('/:disciplineId', function (request, response, next) {
    //TODO implement function
});

/**
 * Updates discipline offering info in database
 *
 * @params:
 * @returns:
 * @throws: 500 Error
 *
 * @since: 2014-03-23
 * @author: Davi Stuart Zilli
 */
router.put('/:disciplineId/offerings', function (request, response, next) {
    var discOf = request.body;
    console.log('Updating discipline offering: ' + discOf["id"] + ' with disciplineId ' + discOf["idDiscipline"]);

    DisciplineOffering.update( { id : discOf["id"], idDiscipline : discOf["idDiscipline"]}, discOf, { multi: false }, function (error, numberAffected, raw) {
        if (error) {
            console.log('Error: ' + error);
            response.send(500, {error: error});
        } else {
            console.log('Success: updated ' + numberAffected + ' rows');
            response.send(200);
        }
    });
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
router.delete('/:disciplineId', function (request, response, next) {
    //TODO implement function
});

/**
 * Removes discipline offering from database
 *
 * @params:
 * @returns:
 * @throws: 500 Error, 404 Error
 *
 * @since: 2014-03-23
 * @author: Davi Stuart Zilli
 */
router.delete('/:disciplineId/offerings/:disciplineOfferingId', function (request, response, next) {
    var disciplineId = request.params.disciplineId;
    var disciplineOfferingId = request.params.disciplineOfferingId;
    console.log('Deleting discipline offering: ' + disciplineOfferingId + ' with disciplineId ' + disciplineId);

    DisciplineOffering.remove({ id : disciplineOfferingId, idDiscipline : disciplineId }, function (error, resource) {
        if (error) {
            console.log('Error: ' + error);
            response.send(500, {error: error});
        }
        else if (resource) {
            console.log('Success: ' + disciplineOfferingId);
            response.send(resource);
        }
        else {
            console.log('Not found: ' + disciplineOfferingId);
            response.send(404);
        }
    });
});

module.exports = router;