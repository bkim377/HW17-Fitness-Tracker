const router = require("express").Router();
const Workout = require("../models/workout.js");


// Get routes
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .limit(7)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


// Post routes
router.post("/api/workouts", (req, res) => {
  Workout.create({})
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});


// Put routes
router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
      req.params.id,
      { 
          $push: { exercises: req.body } 
      },
  ).then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


  // delete route
  router.delete("/api/workouts", (req, res) => {
      Workout.findByIdAndDelete(req.body.id)
      .then(() => {
          res.json(true);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

module.exports = router;
