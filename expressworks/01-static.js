'use strict';
let path = require('path');
let express = require('express');
let app = express();

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.listen(process.argv[2]);
