import express, { json } from 'express';
import { connect } from "mongoose";
import  authRouter  from './routes/auth.js';

const app = express()
app.use(json())

const PORT = 3000;

connect("mongodb://localhost:27017/dukaOnline")
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
