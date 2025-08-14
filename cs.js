const express= require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.get('/CS',(request,response)=>{
    response.json({
        HOD: "Mustaffa Bastikodi",
        students: 252,
         Batches :4
    })
    app.get('/IS',(request,response)=>{
        response.json({
            HOD: "Dinesh",
            students: 120,
            Batches: 2
        })
        app.get('/EC',(request,response)=>{
            response.json({
                HOD: "Anush Bekal",
                students: 120,
                Batches:2
            })
        })
        
    })
})
app.listen(2007,()=>{
console.log('Server started')
})