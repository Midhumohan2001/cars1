// import cors

const cors=require('cors')

// immport datasservice from service folder

const dataservice =require('./service/dataservice')





// import express
const express=require('express')
const {json} = require('express')


// create app
const app=express()


// connect frontend after creating app

app.use(cors({origin:'http://localhost:4200'}))

// to convert json data 

app.use(express.json())


app.post('/rentcar',(req,res)=>{
    dataservice.rentcar(req.body.days,req.body.price,req.body.name,req.body.image).then(result=>{
        res.json(result)
    })
})


app.post('/getcar',(req,res)=>{
    dataservice.getcar().then(result=>{
        res.json(result)
    })
})


app.post('/getrentedcar',(req,res)=>{
    dataservice.getrentedcar().then(result=>{
        res.json(result)
    })
})


app.post('/delete',(req,res)=>{
    dataservice.deletecar(req.body.name).then(result=>{
        res.json(result)
    })
})
app.listen(3001,()=>{
    console.log('server started at port number 3001');
})