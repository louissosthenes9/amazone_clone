const express = require('express')
const authrouter = require('./routes/auth')
const app = express()
const PORT = 3000;
app.use(authrouter);
app.listen(PORT,"0.0.0.0",()=>{

})