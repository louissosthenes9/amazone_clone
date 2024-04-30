const express = require('express')
const mongoose =require("mongoose")
mongoose.set('strictQuery', false);
const path = require('path')
const { authRouter } = require('./routes/auth')

const app = express()
app.use(express.json())

const PORT = 3000;

mongoose.connect("mongodb://localhost:27017/")
  .then(() => {
    console.log("successfully connected to database");
  })
  .catch((error) => {
    console.error("Error connecting to database: ", error);
  });


app.use('/',authRouter)


app.listen(PORT,"0.0.0.0",()=>{
   console.log(`connected to ${PORT}`)
})
