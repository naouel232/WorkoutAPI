const mongoose = require('mongoose')

//creat a schema
const Schema = mongoose.Schema
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true 
    },
     reps: {
        type: Number,
        required: true

     },
     load: {
        type: Number,
        required: true
     }
}, { timestamps:true })


//creat a module

module.exports = mongoose.model('Workout', workoutSchema)
