const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/db',{ useNewUrlParser: true , useCreateIndex: true, useUnifiedTopology: true},(err)=>{
    if (err) throw err;
    console.log('Database Connected')
})
