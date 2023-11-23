const express=require("express");
const fs=require("fs");
const path=require("path");
const app=express();

const port=5000;

app.use(express.static('static')); //to serve static files
//the folder called views contains all templates 

app.use('/static',express.static('static'));
app.use(express.urlencoded());
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));


app.get("/",(req,res)=>{
    res.status(200).render("index.pug");

});

app.listen(port,()=>{
    console.log("pizza and pie ");
})
