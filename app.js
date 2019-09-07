const express = require('express')
const app = express()
const config =  require('./server/config/environment')
const mongoose  = require('mongoose')
const connecString = config.typeOfProd().mongo.uri;
var registerRoutes = require('./server/routes');
require('dotenv').config()

mongoose.connect(connecString, {
    useNewUrlParser: true
}).then(()=>{
    console.log("Connection sucessfull");
})
.catch((err)=>{
    console.log(connecString)
    console.log(err)
})


app.get('/',(req,res)=>{
    res.send("hey")
})

//Middlware
app.use(express.json());

registerRoutes(app);

app.listen(config.all(),()=>{
    console.log("Server is up on "+config.all())
})