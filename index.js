require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000

app.get('/',(req,res)=>{
    res.send("Welcome to my first api");
})

app.get('/twitter',(req,res)=>{
    res.send("yashdotcom");
})

app.get('/login',(req,res)=>{
    res.send("<h1>Login at Chai aur Code</h1>")
})

app.get('/chai',(req,res)=>{
    res.send("<h2>Chai Aur Code</h2>")
})

app.listen(PORT,()=>{
    console.log(`Server listining at ${PORT}`);
})