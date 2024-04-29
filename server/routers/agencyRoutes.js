const express=require('express');

const { createTravalAgency, imageUpload, upload, getTravalAgency, getTravalAgencyById } = require('../controllers/TravalAgency');
const router=express.Router();


router.post('/createagency',upload.single('Image'),createTravalAgency);
router.post('/upload', upload.single('Image'), imageUpload);
router.get('/getagencies',getTravalAgency);
router.get('/getagency/:id', getTravalAgencyById);
module.exports=router;