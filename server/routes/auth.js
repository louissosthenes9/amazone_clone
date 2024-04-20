const express = require("express")

const authRouter =express.Router()
authRouter.get('/users',(re,res)=>{

})

authRouter.post('/api/signup',(re,res)=>{
    const {name,email,password}= req.body;
})

module.exports = {authRouter,};
