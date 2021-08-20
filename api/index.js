const express = require('express')
const app = express()

const morgan = require('morgan')
const dotenv = require('dotenv')
const helmet = require('helmet')
const mongoose = require('mongoose')
const userRoute = require('./routes/usersRoutes')
const authRoute = require("./routes/authRoutes");
const postRoute = require('./routes/postRoutes')
dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} , ()=>{
    console.log('connected to mongoDb')
});

//middleware

app.use(express.json())
app.use(morgan('common'))
app.use(helmet())

app.get('/' , (req,res)=>{
    res.send('Welcome to Home Page')
})
app.use("/api/posts", postRoute);
app.use('/api/users' , userRoute)
app.use("/api/auth", authRoute);



app.listen(8800 , ()=>{
    console.log("backend Server is Running")
})