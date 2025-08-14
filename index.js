// import express
const express= require('express')
const cors = require('cors')
const app = express()
app.use(cors())

// app.get('/hello',(request,response)=>{
    //SERVER CODE
    // response.send('Hello,World!') // to send response 
    // var name= request.query.name;
    // var age= request.query.age;
    // var occupation=request.query.occupation;
    // response.json(
    //     {
    //         name:name,
    //         age:age,
    //         occupation:occupation,
    //     }
    // )
    // response.json({
    //     name:"Thanushree Bhat K G",
    //     age:18,
    //     occupation:"Student"
    // })
//})
app.use(express.json())//to post
app.post('/login',(request,response)=>{
    const emailValue= request.body.email;
    const passwordValue= request.body.password;
    if(emailValue=="306@gmail.com" && passwordValue=="ts123"){
        response.json(
            {message:"Login Successful"})
    }else{
        response.json({message:"Invalid Credentials"});
    }
})
app.get('/login',(request,response)=>{
    const emailValue= request.query.email;
    const passwordValue= request.query.password;
    if(emailValue=="306@gmail.com" && passwordValue=="ts123"){
        response.json(
            {message:"Login Successful"})
    }else{
        response.json({message:"Invalid Credentials"});
    }
})
app.listen(3000,()=>{
console.log('Server started')
})