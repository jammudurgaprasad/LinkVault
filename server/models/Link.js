const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
    category: String,
    name: String,
    url: String
});

module.exports = mongoose.model('Link', LinkSchema);
