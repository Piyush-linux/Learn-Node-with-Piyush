
# Frontend 

- Setup react & axios to fetch backend API
- Fetch :3000/api/v1/todo from backend
- Proxy in vite + react

# Backend

- Setup express server & ENV
- Setup API path : /todo => { task: "New Task" }
- Setup CORS / Cross-Origin

---

yarn create vite
yarn add axios

## Frontend API
- http://localhost:5173/
- http://localhost:5173/api/todo

- Breakdown API :
	- API : localhost::3000/api/v1
	- Path : /todo , /jokes

## Proxy
- when use use `/api/jokes`
	- the `/api` will get proxy/replaced with `http://localhost:3000`
```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
})

```

---


## API
- /api/v1/<path>
	- /api/v1 : standard used to create API where /api represent API path & /v1 as version 1 of that API

- /todo