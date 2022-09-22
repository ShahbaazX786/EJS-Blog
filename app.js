const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');
const PORT = process.env.PORT || 3000

const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));





app.listen(PORT,function(req,res){
    console.log("server started on port "+PORT+" bro!!");
})