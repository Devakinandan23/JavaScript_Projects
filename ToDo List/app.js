const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js")
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');

let items = [];
let workItem = [];

app.get("/",function(req,res){
    let day = date.getDate();
    res.render("list",{listTitle : day,newListItem:items});
});

app.post("/",function(req,res){
    let item = req.body.newItem;

    if(req.body.list==="Work"){
        workItem.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect('/');
    }
});

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",newListItem:workItem});
});

app.listen(process.env.PORT || 3000,function(){
    console.log("Server Started at port 3000");
});
