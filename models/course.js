/**
 * @Class
 * User entity
 *
 * @since:
 * @author:
 */
var mongoose, Schema, schema;

mongoose = require('mongoose');
Schema   = mongoose.Schema;

schema = new Schema({});

module.exports = mongoose.model('Course', schema);