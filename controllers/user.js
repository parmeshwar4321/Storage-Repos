const db = require('../databaseModels/dbModels')

const createUser = (req,res)=>{
    res.send('hello')
}

const login = (req,res)=>{
    res.send('you logged in successfully')
}

const postLogin = (req,res)=>{
    const body = req.body
    console.log(body);
    res.send(body)
}
module.exports={createUser,login,postLogin}