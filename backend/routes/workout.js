const express = require("express");
const router = express.Router();
const Workout = require("../models/Workout");
const auth = require("../middleware/auth");



//post workout
router.post("/", auth, async (req, res) => {
    try {
      const { title, exercises, goal } = req.body;
  
      const workout = new Workout({
        userId: req.user.id,
        title,
        exercises,
        goal,
      });
  
      await workout.save();
  
      res.status(201).json(workout);
    } catch (err) {
      res.status(500).send("Server error");
    }
  });


//get workout
router.get("/", auth, async (req, res) => {
    try {
      const workouts = await Workout.find({ userId: req.user.id });
      res.json(workouts);
    } catch (err) {
      res.status(500).send("Server error");
    }
  });

  module.exports = router;