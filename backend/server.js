import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { connection } from './connectDB.js'


const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })