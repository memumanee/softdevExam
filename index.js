const express = require('express')
const isPrime = require('./Prime')
const app = express()
const port = 3000

app.get('/is_prime/:Y', (req, res) => {
   let{Y} = req.params
   let response = isPrime(Y)
   res.send(response)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})