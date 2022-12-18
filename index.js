 var express = require('express');
    var https = require('https');
    var fs = require('fs');

    var options = {
      ca: [fs.readFileSync(PATH_TO_BUNDLE_CERT_1), fs.readFileSync(PATH_TO_BUNDLE_CERT_2)],
      cert: fs.readFileSync(PATH_TO_CERT),
      key: fs.readFileSync(PATH_TO_KEY)
    };

    app = express()

    app.get('/', function(req,res) {
        res.send('hello');
    });

    var server = https.createServer(options, app);

    server.listen(8001, function(){
        console.log("server running at https://IP_ADDRESS:8001/")
    });
