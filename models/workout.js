// track the name, type, weight, sets, reps, and duration of exercise
const mongoose = require("mongoose");
const opts = { toJSON: { virtuals: true } };

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now(),
    },
    exercises: [
    {
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the workout",
  },
  type: {
    type: String,
    trim: true,
    required: "Enter the type of workout",
  },
  weight: {
    type: Number,
    required: "Enter the amount of weight to be lifted",
  },
  sets: {
    type: Number,
    required: "Enter the number of sets to do",
  },
  reps: {
    type: Number,
    required: "Enter the number of reps to do",
  },
  distance: {
    type: Number,
    required: "Enter the distance to travel",
  },
  duration: {
    type: Number,
    required: "Enter the number of minutes to take",
  }
    }]
});

// creates a virtual to get the total time for all given exercises
workoutSchema.virtual("overallDuration")
.get(function() {
    var durationSum = this.exercises.reduce((addUp, current) => {
        return addUp.duration + current.duration;
    });
    return durationSum.duration;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
