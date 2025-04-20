const dotenv = require('dotenv')
dotenv.config();
const express = require("express")
const cors = require('cors')
const app = express();
const userRoutes = require("./routes/user.routes")

const connectToDb = require('./db/db')
connectToDb()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.get("/", (req, res)=>{
    res.send("Hello world")
})
app.use('/users', userRoutes)


module.exports = app;