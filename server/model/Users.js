const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
 userName:{
    type:String
 },
 
email:{
    type:String,
    required:true
 },

 phoneNumber:{
  type:String,
  required:true
 },
 password:{
    type:String,
    required:true
 },


})

const Users=mongoose.model("users",UserSchema);
module.exports=Users;