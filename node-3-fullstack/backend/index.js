const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/v1/todo', (req, res) => {

  let todo = [{
    id:1,
    name:"Task 1"
  },{
    id:2,
    name:"Task 2"
  },{
    id:3,
    name:"Task 3"
  },]

  res.json(todo)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})