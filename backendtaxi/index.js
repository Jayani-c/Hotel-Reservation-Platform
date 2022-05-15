// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())

const apiTaxiRoutes = require ('./routes/apiTaxiRoutes')
require ('./db/connectDB')

app.use("/api",apiTaxiRoutes)

const port = process.env.PORT || 5000

app.listen(port,() =>{
    console.log(`Service started port ${port}`)
})