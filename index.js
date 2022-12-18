 var express = require('express');
    var https = require('https');
    var fs = require('fs');

    var options = {
    };

    app = express()

    app.get('/', function(req,res) {
        res.send('hello');
    });

    var server = https.createServer(options, app);

    server.listen(8001, function(){
        console.log("server running at https://IP_ADDRESS:8001/")
    });
