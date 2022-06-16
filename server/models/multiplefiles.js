const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const multipleFileSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    files: [Object]                 // also use files: [] both are same
}, {timeseries: true});

module.exports = mongoose.model('MultipleFile', multipleFileSchema);