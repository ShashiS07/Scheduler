const express=require('express')
const mongoose=require('mongoose')
const route=require('./route/route')
const app=express()

app.use(express.json())

app.use('/',route)

app.listen(process.env.PORT || 3000,function(){
    console.log("Express is running on port " + (process.env.PORT||3000))
})
