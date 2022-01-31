const express = require('express');
var bodyParser = require('body-parser');
const app= express();

const port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index');
})

app.post('/contact',urlencodedParser, function(req,res){
    console.log(req.body);
    res.render('success',{data: req.body});
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})
