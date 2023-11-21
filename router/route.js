const express = require('express')
const app = express()
const port = 3001
const userData = require('userData')
const mongoose = require('mongoose')



app.post("/", async (req, res) => {

    try {
    const check = await userData.findOne({name : req.body.name})
     if(check){

     res.status.json("user alerdy exist")
     
    }



    } catch (error) {

    }


})