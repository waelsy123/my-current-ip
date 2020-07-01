const express = require('express')
const app = express()
const port = process.env.PORT || 3000

let ip = ''

app.get('/ping', (req, res) => {
  ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  return res.send('Hello World!')
})

app.get('/', (req, res) => res.send(`his ip: ${ip}`))

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
