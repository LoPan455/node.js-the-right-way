"use strict";
const
    net = require('net'),
    server = net.createServer(function(connection) {
        // use connection object for data transfer
        console.log(connection);
    })
    server.listen(5001); // creates a server and listens for requests on TCP 5432.
    console.log("Listening on port 5001");