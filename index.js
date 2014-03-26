var express, mongoose, nconf, bodyParser,
    app;

express    = require('express');
mongoose   = require('mongoose');
nconf      = require('nconf');
bodyParser = require('body-parser');

nconf.argv().env();
nconf.defaults({
    'db-uri'      : 'mongodb://localhost/dac-courses',
    'server-port' : 8080,
    'server-uri'  : 'http://localhost',
    'auth-uri'    : 'http://localhost:8080',
    'auth-key'    : 'OQ7tkY+dLbBaJa.f)J&+]x)]}(1gg#D@+~AgI!vc>z{>F0V?YBbv_-%) #s.5-v)'
});

mongoose.connect(nconf.get('db-uri'));

app = express();
app.use(bodyParser());
app.use('/courses', require('./controllers/course'));
app.use('/disciplines', require('./controllers/discipline'));
app.use('/discipline-blocks', require('./controllers/discipline-block'));
app.use('/catalogs', require('./controllers/catalog'));
app.use('/catalogs/:catalogId/offerings', require('./controllers/catalog-offering'));

app.listen(nconf.get('server-port'));

module.exports = app;