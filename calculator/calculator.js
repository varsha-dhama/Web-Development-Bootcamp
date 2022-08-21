const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post('/', function (req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result  = String(num1+num2);
    res.send(result);
});

app.get('/bmiCalculator', function (req, res) {
    res.sendFile(__dirname + '/bmiCalculator.html');    
});

app.post('/bmiCalculator', function (req, res) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var result = String(weight/(height*height));
    res.send(result);
})

app.listen(3000, function (){
    console.log("Listening at port number 3000");
});