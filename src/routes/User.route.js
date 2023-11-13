const express = require('express');
const User = require("../models/User");
const app = express();

app.get('/', (req, res) => {
    try{
        console.log(req.url);
        User.findAll().then((result)=>{
          console.log(JSON.stringify(result));
        })
    }
    catch(err){
        console.error("Error while getting all the users: ", err)
    }
})

app.post('/', (req, res) => {
    try{
        console.log(req.body);
    }
    catch(err){
        console.error("Error while creating a new user: ", err)
    }
})

module.exports = app