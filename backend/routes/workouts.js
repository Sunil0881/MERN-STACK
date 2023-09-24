const express = require('express')

const workouts = require("../models/workoutModel")
const {createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout} = require('../controllers/workoutControllers')


const router = express.Router()

//get all workouts
router.get('/', getWorkouts ) 


//get single workouts
router.get('/:id', getWorkout)


//post new workout
router.post('/', createWorkout )


//delet new workout
router.delete('/:id', deleteWorkout)

//update new workout
router.patch('/:id', updateWorkout)



module.exports = router
