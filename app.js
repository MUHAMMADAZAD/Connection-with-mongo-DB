const express = require("express");
const app=express();
const mongoose=require ("mongoose");
mongoose.connect("mongodb+srv://<azad786>:<pak786786>@cluster0.vjgob.mongodb.net/?retryWrites=true&w=majority",()=>{
console.log("Connect to data base successfully")
});
app.listen(5000,()=>{console.log("server started st 5000 port");
})

