const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const dotenv=require('dotenv');
const cors=require("cors");
dotenv.config();
app.use(cors('*'));
app.use(express.json())
const path = require('path');


app.use(express.urlencoded({ extended: true }));
const UserRouter=require('./routers/userRoutes')

const PORT = process.env.PORT;
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    app.listen(PORT, () => console.log(`Starting from server port: ${PORT}`));
}).catch(err=> console.log(`${err} did not connected`));

app.use(cookieParser());
app.use(UserRouter)

