import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { connection } from './connectDB.js'
import { select } from './controllers/select.js'
import { update } from './controllers/update.js'
import { add } from './controllers/add.js'
import { sql_delete } from './controllers/delete.js'


const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


app.get('/', select)
app.patch("/update", update)
app.post("/add", add)
app.delete("/delete/:id", sql_delete)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })