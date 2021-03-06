// track the name, type, weight, sets, reps, and duration of exercise
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
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
          type: Number
        },
        sets: {
          type: Number
        },
        reps: {
          type: Number
        },
        distance: {
          type: Number
        },
        duration: {
          type: Number,
          required: "Enter how long the exercise takes (in minutes)"
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
