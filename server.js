// Express is a node module for building HTTP servers 
var express = require('express');
var app = express();

// Tell express to look inth public directory for any files first 
app.use(express.static("Public")); 

// Default route of / and what to do 
app.get("/", function(req,res) {
        res.send("<html><body><h1>Hello! Thank You for Connecting!</h1></body></html>");
});

app.listen(80)