require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT


// Check if server is up
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Send Json to Client
app.get('/json', (req, res) => {

	// Data to be send 
    let data = {
        "login": "Piyush-linux",
        "id": 72852842,
        "node_id": "MDQ6VXNlcjcyODUyODQy",
        "avatar_url": "https://avatars.githubusercontent.com/u/72852842?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Piyush-linux",
        "html_url": "https://github.com/Piyush-linux",
        "followers_url": "https://api.github.com/users/Piyush-linux/followers",
        "following_url": "https://api.github.com/users/Piyush-linux/following{/other_user}",
        "gists_url": "https://api.github.com/users/Piyush-linux/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Piyush-linux/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Piyush-linux/subscriptions",
        "organizations_url": "https://api.github.com/users/Piyush-linux/orgs",
        "repos_url": "https://api.github.com/users/Piyush-linux/repos",
        "events_url": "https://api.github.com/users/Piyush-linux/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Piyush-linux/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Piyush",
        "company": null,
        "blog": "https://piyush98.netlify.app/",
        "location": "India, Mumbai",
        "email": null,
        "hireable": true,
        "bio": "Web . Linux . Anime",
        "twitter_username": null,
        "public_repos": 55,
        "public_gists": 1,
        "followers": 18,
        "following": 255,
        "created_at": "2020-10-14T06:41:54Z",
        "updated_at": "2024-03-23T06:17:04Z"
    }
    // Response JSON as data
    res.json({ data })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})