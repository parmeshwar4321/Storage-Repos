const express = require("express");
const app = express();
const db = require('./databaseConnection/db')

app.use(express.json())
app.use('/',require('./routers/route'))

app.listen(3000,()=>{
    console.log("server is working on port 3000");
})