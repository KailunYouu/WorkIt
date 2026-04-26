const express = require("express");
const router = express.Router();
const Progress = require("../models/Progress");
const auth = require("../middleware/auth");


//post progress
router.post("/", auth, async (req, res) => {
    try {
      const { workoutId, status } = req.body;
  
      const progress = new Progress({
        userId: req.user.id,
        workoutId,
        status,
      });
  
      await progress.save();
  
      res.status(201).json(progress);
    } catch (err) {
      res.status(500).send("Server error");
    }
  });


  //get progress
  router.get("/", auth, async (req, res) => {
      try {
        const progress = await Progress.find({ userId: req.user.id });
        res.json(progress);
      } catch (err) {
        res.status(500).send("Server error");
      }
    });


    module.exports = router;