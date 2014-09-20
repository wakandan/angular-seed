var express = require('express');
var engines = require('consolidate');
var app = express();
app.set('views', __dirname+'/app');
app.set('view engine', 'html');
app.use('/', express.static(__dirname+'/app'));
server = app.listen(3000, function() {
   console.log("server started at port 3000"); 
})
