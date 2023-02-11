const express=require('express')
const route=require('./route/route')
const moment=require('moment')
const cron= require('node-cron')
const app=express()

app.use(express.json())

app.use('/',route)

app.listen(process.env.PORT || 3000,function(){
    console.log("Express is running on port " + (process.env.PORT||3000))
})


