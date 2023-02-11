const express= require('express')
const moment=require('moment')
const router=express.Router()
const cron= require('node-cron')

router.get('/givetask/:task', async function(req,res){
    let  task=req.params.task
    function rev(task){
        task=task.split("").reverse().join("")
        return task
    }
    let result=rev(task)

    if(task=="textone"){
    cron.schedule('*/5 * * * *',()=>{
        return res.send({status:true,message:result,date:moment().format('YYYY-MM-DD hh:mm:ss')})
    },{
        scheduled:true,
        timezone: "Asia/Kolkata"
    })
}else{
    cron.schedule('0 15 14 7 *',()=>{
        return res.send({status:true,message:result,date:moment().format('YYYY-MM-DD hh:mm:ss')})
    },{
        scheduled:true,
        timezone: "Asia/Kolkata"
    })
}
})

router.all('/*',function(req,res){
    return res.status(404).send({status:false,message:"Invalid http request"})
})

module.exports=router