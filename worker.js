var Hapi   = require('hapi');
var routes = require('./routes.js');
var config = require('./config/index.js');

var server = Hapi.createServer(config.host, config.port, { cors: true });

// add routes
server.route(routes);

server.start()
console.log('SERVER : polymer-todomvc app running on '
    + config.host + ':' + config.port);