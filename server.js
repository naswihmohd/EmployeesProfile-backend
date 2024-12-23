const express = require('express')
const cors = require('cors')
const adminRouter = require('./routers/adminRouter')
const dbConfig = require('./connection/dbConfig')


const app =express()
app.use(cors({origin:"http://localhost:3000",credentials:true}))
dbConfig()
app.use('/',adminRouter)


app.listen(4000,()=>{
    console.log('server is running');
})