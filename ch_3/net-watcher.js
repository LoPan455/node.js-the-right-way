'use strict';

const
    fs = require('fs'),
    net = require('net'),

    filename = process.argv[2],

    server = net.createServer(function(connection) {
        
        // reporting
        console.log('Subscriber connected');
        connection.write('Now watching ' + filename + ' for changes...\n');

        //watcher setup
        let watcher = fs.watch(filename, function(){
            connection.write('File ' + filename + 'changed: ' + Date.now() + "\n"
        })
    })