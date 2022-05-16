// import express from 'express';
// import gettaxis from '../controllers/taxicontroller.js'
const express = require('express')
const router = express.Router()

const {gettaxis} =require('../controllers/taxicontroller')

router.get("/taxis",gettaxis)

const {posttaxis} =require('../controllers/taxicontroller')

router.post("/taxis",posttaxis)

module.exports = router