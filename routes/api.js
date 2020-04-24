const Workout = require("../models/Workout");

module.exports = function(app) {


// Get routes
app.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

app.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .limit(7)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Put routes
app.put("/api/workouts/:id", (req, res) => {
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

// Post routes
app.post("/api/workout", (req, res) => {
  Workout.create({})
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});


app.post("/api/workout/range", (req, res) => {
    Workout.create({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });


};
module.exports = router;
