const express=require('express');

const { createTravalAgency, imageUpload, upload } = require('../controllers/TravalAgency');
const router=express.Router();


router.post('/createagency',upload.single('Image'),createTravalAgency);
router.post('/upload', upload.single('Image'), imageUpload);

module.exports=router;