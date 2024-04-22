const express = require("express")

const authRouter = express.Router()
authRouter.get('/user',(req,res)=>{
  res.json({"name":"Louis"})
})

authRouter.post('/api/signup',(req,res)=>{
    const {name,email,password}= req.body;
})

module.exports = {authRouter,};
