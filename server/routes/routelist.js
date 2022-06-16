'use strict';

const {singleFileUpload, multipleFileUpload, getAllSingleFiles, getAllMultipleFiles} = require('../controllers/fileUploadController');
const express = require('express');
const {upload} = require('../helpers/filehelper');
const  router = express.Router();


// upload files
router.post('/singlefile', upload.single('file'), singleFileUpload);
router.post('/multiplefile', upload.array('files'), multipleFileUpload);

// get files
router.get('/getsinglefiles', getAllSingleFiles);
router.get('/getmultiplefiles', getAllMultipleFiles);

module.exports = {
    routes :router
}