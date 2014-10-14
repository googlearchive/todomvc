// setup environment
var env = process.env.NODE_ENV

if (env === 'production') {
    module.exports = require('./production.json');
} else if (env === 'development') {
    module.exports = require('./development.json');
} else {
    module.exports = {};
}