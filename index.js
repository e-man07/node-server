const express = require('express')
const app = express()


app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.get('/hello', function(req, res) {
    res.send('hello from Mars')
})

app.listen(3000)