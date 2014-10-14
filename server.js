var Hapi   = require('hapi');
var routes = require('./routes.js');
var config = require('./config/index.js');

var createServer = function (host, port) {
    var server = Hapi.createServer(host, port, { cors: true });

    // add routes
    server.route(routes);

    return server;
};

module.exports = function () {
    return createServer(config.host, config.port);
};