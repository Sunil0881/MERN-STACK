const express = require('express')
const mongoose = require('mongoose')

const workoutsRoutes = require('./routes/workouts')
const MONGO_url = 'mongodb+srv://sunil_0881:P3CnbfY414hjmkbM@cluster0.fsdthfp.mongodb.net/mern'

//create express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
   console.log(req.path, req.method)
   next()
})

//routes

app.use('/api/workouts', workoutsRoutes)

//connect to DB

mongoose.connect(MONGO_url)
    .then(() => {
        app.listen (5000, () => {
            console.log(" mongoDB connected & listening on port 5000")
        }) 
    })
    .catch(() => {
        console.log('error')
    })
  

