const mongoose=require("mongoose");
const userschema=new mongoose.Schema({
    Name:String,
    Password:String,
    Email:String
})
module.exports=mongoose.model('users',userschema);