const express = require('express')
const cors = require('cors')

const app = express()
const  path  = require('path')

app.use(cors())
app.use(express.static(
    __dirname + "/build"
))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + "/build/index.html"))
})

app.listen(process.env.PORT || 3000)