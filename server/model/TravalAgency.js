const mongoose=require('mongoose');

const AgencySchema=new mongoose.Schema({

     agencyName:{
        type:String
     },
     image:[{
        type:String
     }],
    description:{
        type:String
     },
     country:{
        type:String
     },
     city:{
        type:String
     },
     address:{
        type:String
     },
     website:{
        type:String
     },
    RegistrationNo:{
        type:String
     },
     licenceNo:{
        type:String
     },

});

const AgencyDetails=mongoose.model('travalAgency',AgencySchema);
module.exports=AgencyDetails;