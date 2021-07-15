const mongoose = require('mongoose');

const user = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const userSchema = mongoose.model('user_data',user);

module.exports= userSchema;