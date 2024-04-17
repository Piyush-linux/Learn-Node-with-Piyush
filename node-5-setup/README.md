# Setup

## How to understand backend
1. Schema : models
2. API: Swagger API, Routes
```

- init: git(.gitignore) , npm(package.json) , README.md > gitignore generator
- Server: Express , dotenv & nodemon
- Format: Prettier(.prettierrc , .prettierignore) > `yarn add prettier -D` , `npx prettier . --write`
- DB : Database Conection : /db


- Database Connection : mongoose
  1.  Atlas
  2.  Local/Docker
  - Create Database Name in constants.js & connect under /db
  - always use `try..catch` or `promises` for `async..await` : Database is alwasys in another continent
  - You can also use function call emediately if needed: `(async()=>{})()`
  - database handeling: env, errorHandeling-try..catch-then..catch
  - Once Connected start listening in Server
+ Setup Express: /src/app.js

- ENV Setup for type:modules
```
// package.json
{
	"scripts":{
		"dev":"nodemon -r dotenv/config --experimental-json-modules src/index.js"
	}
}

// index.js
import dotenv from "dotenv";

dotenv.config({
    path:"./env"
})
```




1. Get Path/Routes
2. Get data Points

- package.json

```json
"type": "module",
"scripts":{
	"dev":"node src/index.js",
	"start":"nodemon src/index.js"
}

```

```yml
- public/temp.gitkeep
	- /temp : store images on server for temporary before uploading to cloudinary
	- .gitkeep : to tell get to store these empty dir in Github
- .env & .env.sample : `.env.sample` is a sample of env
- src: Index.js
- controller:
- db: connect to Database
- middlewares: Auth & Middleware
- routes: routes to API
- models: Schema

-
```

+ Middleware
  - app use: cors, json, urlencoded, cookieParser
+ Routing
  [/path] - [middleware] - [ (err,req,res,next) => res.send ]
+ Nodejs API Error (Error Class)
  - 
