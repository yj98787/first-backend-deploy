require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 4000

const github = {
    "login": "yj98787",
    "id": 112374459,
    "node_id": "U_kgDOBrKyuw",
    "avatar_url": "https://avatars.githubusercontent.com/u/112374459?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/yj98787",
    "html_url": "https://github.com/yj98787",
    "followers_url": "https://api.github.com/users/yj98787/followers",
    "following_url": "https://api.github.com/users/yj98787/following{/other_user}",
    "gists_url": "https://api.github.com/users/yj98787/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/yj98787/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/yj98787/subscriptions",
    "organizations_url": "https://api.github.com/users/yj98787/orgs",
    "repos_url": "https://api.github.com/users/yj98787/repos",
    "events_url": "https://api.github.com/users/yj98787/events{/privacy}",
    "received_events_url": "https://api.github.com/users/yj98787/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Yash Jain",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Learner, Aspiring App developer.",
    "twitter_username": null,
    "public_repos": 14,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-08-29T06:25:00Z",
    "updated_at": "2025-09-21T10:05:32Z"
    }

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

app.get('/git',(req,res)=>{
    res.json(github)
})

app.get('/web',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(PORT,()=>{
    console.log(`Server listining at ${PORT}`);
})