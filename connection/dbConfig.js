const mongoose = require ('mongoose')


const dbConfig = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/Employees').then(()=>{
        console.log('db connected')
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = dbConfig