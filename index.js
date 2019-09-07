/*eslint no-process-env:0*/

// Set default node environment to development
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Export the application
module.exports = require('./app');
