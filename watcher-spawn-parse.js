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
    let
    ls = spawn('ls', ['-lh', filename]), // the variable ls is actually a spawn of the 'ls' process, run with the -lh parameters and the filename
    output = ''; // initialize otuput as an empty string

    ls.stdout.on('data',function(chunk){ 
        output += chunk.toString();
    })

    ls.on('close', function(){
        let parts = output.split(/\s+/);
        console.dir([parts[0], parts[4], parts[8]]);
    });

});
console.log("Now watching " + filename + " for changes...");
