'use strict';

const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect('mongodb://localhost:27017/fileupload?readPreference=primary&appname=MongoDB%20Compass&ssl=false', {
        
    }).then(()=>console.log('DB is connected')).catch(()=>{
        console.log('Something went wrong');
    });
}