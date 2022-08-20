const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('<h1>Hello World!!</h1');
});

app.get('/contact', function(req, res){
    res.send('<p>Mobile num - 000000000</p>');
});

app.get('/about', function(req, res){
    res.send('<p>Varsha Dhama</p>');
});

app.listen(3000, function(){
    console.log("App listening on port 3000");
});