require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 4000

app.use(express.static(path.join(__dirname)))

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

app.get('/web',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(PORT,()=>{
    console.log(`Server listining at ${PORT}`);
})