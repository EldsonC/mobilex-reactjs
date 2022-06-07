const express = require('express')
const cors = require('cors')

const app = express()
const { resolve } = require('path')

app.use(cors())
app.use(express.static(
    resolve(
        __dirname,
        './build'
    )
))

app.listen(process.env.PORT || 3000)