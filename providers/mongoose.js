const mongoose = require('mongoose');
const Promise = require('bluebird');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/parrainage');
mongoose.Promise = Promise;

module.exports = mongoose;
