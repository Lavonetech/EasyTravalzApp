const express=require('express');
const { createUser, userLogin, getUserById, updateUser } = require('../controllers/User');
const router=express.Router();

router.post('/createuser',createUser)
router.post('/loginuser',userLogin)
router.get('/getuserbyid/:id',getUserById)
router.put('/updateuser/:id',updateUser)

module.exports=router;