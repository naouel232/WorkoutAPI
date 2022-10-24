require('dotenv').config()

const express = require('express')

const mongoose = require ('mongoose')
const workoutRoutes = require ('./routes/workouts')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
console.log(req.path, req.method)
next()
})

//routes
app.use('/api/workouts', workoutRoutes)


//conncet to the db
mongoose.connect(process.env.MONGO_URI)
.then(() => {

//listen to request 
app.listen(process.env.PORT , () => {
    console.log('connected to db and listening on the port', process.env.PORT)
})
})

.catch((error) => {
    console.log(error)
})



process.env