const express = require('express')
const path = require ('path')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/web', (req, res) => {
  console.log(req);
  res.sendFile(path.join(__dirname, '/index.html')); 
})


app.get('/stats/:name', (req, res) => {
  req.send('/')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
