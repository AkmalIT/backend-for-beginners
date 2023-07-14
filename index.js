const express = require('express')
const router = require('./routes/user-routes')
const postRouter = require('./routes/post-routes')
require("dotenv").config()


const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use('/api', router)
app.use('/api', postRouter)
app.listen(port, () => console.log(`Server started on port ${port}`))