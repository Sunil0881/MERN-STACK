const express = require('express')
const workouts = require("../models/workoutModel")

const router = express.Router()

//get all workouts
router.get('/', (req, res) => {
      res.json({mssg:"GET all workouts"})
})

//get single workouts
router.get('/:id', (req, res) => {
    res.json({mssg:"GET single workouts"})
})

//post new workout
router.post('/', async(req, res) => {
    const {title, reps, load} = req.body

    try{
        const workout = await workouts.create({title, reps, load})
    return res.status(200).json(workout)
    } catch (error) {
    return res.status(400).json({error:error.message})

    }
    
    res.json({mssg:"post workouts"})
})


//delet new workout
router.delete('/:id', (req, res) => {
    res.json({mssg:"delete workouts"})
})

//update new workout
router.patch('/:id', (req, res) => {
    res.json({mssg:"update a  workouts"})
})



module.exports = router
