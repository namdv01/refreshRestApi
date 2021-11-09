const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    age: String,
    address: String,
    job: String
});

module.exports = mongoose.model('users',schema);