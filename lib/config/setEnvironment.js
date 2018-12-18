'use strict';

var pack = require('../../package.json');
var env = process.env.NODE_ENV;
pack.scripts.postinstall = 'npm run build-' + env;