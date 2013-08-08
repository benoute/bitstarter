var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger())

//var content = fs.readFileSync('index.html', 'utf8');

app.get('/', function(request, response) {
  fs.readFile('index.html', 'utf8', function(err, content) {
      if (err) throw err;
      response.send(content.toString())
  })
})

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port)
})