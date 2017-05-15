const fs = require('fs');
filename = process.argv[2];
fs.readFile(filename, function (err,data){
    if(err){
        throw err;
    }
    console.log(data.toString());
});