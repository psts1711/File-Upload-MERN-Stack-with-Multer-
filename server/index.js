'use strict';

const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes/routelist')
require('./database')();



const port = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', router.routes)

app.listen(port, ()=> console.log(`server is running on port: ${port}`))



