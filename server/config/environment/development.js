/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {
    // MongoDB connection options
    mongo: {
        useMongoClient: true,
        uri: process.env.MONGODB_URI || 'mongodb://alpit_annad:DBADBADBA1@ds317808.mlab.com:17808/blik-new'/* 'mongodb://localhost/blik-dev' */
    },

    // Seed database on startup
    seedDB: true
};
