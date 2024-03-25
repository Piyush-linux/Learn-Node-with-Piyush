# Dev Setup


### Package.json
```json
{
  "name": "node-2-server",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts":{
    "start":"node index.js"
  },
  "dependencies": {
    "express": "^4.19.1"
  }
}
```

### ExpressJS

## API
- / => "Hello World !" 
  - send plain/text data
- /json => { data: {...}}
  - send josn data 
### Dotenv

- /.env
```env
PORT=3000
API=https://api.github.com/users/piyush-linux
```

- index.js
```
process.env.PORT
```


Prb: We have to restart node for every change
Sol: use __nodemon__

