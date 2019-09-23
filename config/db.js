'use strict';

var mongoose = require('mongoose');
var credential = require('./credentials');


var opts = {
    useNewUrlParser: true,
    useCreateIndex: true,
    keepAlive: 1
};

module.exports = function (app) {
    switch (app.get('env')) {
        case 'development':
            mongoose.connect(credential.mongo.development.connectionString, opts);
            break;
        case 'production':
            mongoose.connect(credential.mongo.production.connectionString, opts);
            break;
        default:
            throw new Error('Unknown execution environment: ' + app.get('env'));
    }
    return mongoose;
};