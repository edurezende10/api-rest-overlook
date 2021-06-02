const  express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const routes = require('./routes')


const app = express()
const port = 3333
mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}, console.log('conected to database'))

app.use(cors())
app.use(express.json())// faz o express rodar json
app.use(routes)



app.listen(port, () => console.log(`server running`))
