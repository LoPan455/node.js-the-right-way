#!/usr/bin/env 
node --harmony
require('fs').createReadStream(process.argv[1]).pipe(process.stdout);
