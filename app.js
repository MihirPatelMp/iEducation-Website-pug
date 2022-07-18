console.log("Hello Mihir");
const express = require("express");
// const fs =require('fs');
const app= express();
const path = require("path");
const port = 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/iEducation', {UseNewUrlParser:true});
const bodyParser = require("body-parser");
// const { constants } = require("buffer");
// const { stringify } = require("querystring");

// Defining mongoose 

const  contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    concern: String
  });
  var contact = mongoose.model('Contact', contactSchema);  

app.use('/static',express.static('static'));
// app.use('/public',express.static('public'));
app.use(express.urlencoded({extended:false})); 
// set the template engine for pug
app.set ('view engine','pug');
// set the views directory
app.set('views',path.join(__dirname,'views'));

// End points

app.get('/',(req,res)=>{
    const params = {};
    res.status(200).render('index.pug', params); 
});
app.post('/contact',(req,res)=>{
    var myData= new contact(req.body);
    myData.save().then(()=>{
        res.send("The items have been saved on the database")
    }).catch(()=>{
        res.status(400).send("The items were not save to the database")
    });
    // res.status(200).render('contact.pug', params); 
});

// start the server

app.listen(port,()=>{
    console.log(`The server is running on port ${port}`);
})