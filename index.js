const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!, test deploy 2')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
