"use strict";

const
    fs = require('fs'), // bring in the FS module
    spawn = require('child_process').spawn, // bring in child-process node module
    filename = process.argv[2]; // filename will be the second argument passed to the 'node' process.  

// if there is no filename present, an error will be thrown
if(!filename){
    throw Error("A file to watch must be specified");
}

fs.watch(filename, function(){
    if(filename){
    let ls = spawn('ls', ['-lh', filename]);
    ls.stdout.pipe(process.stdout);
} else {
    throw Error("This file does not exist");
}
});
console.log("Now watching " + filename + " for changes...");
