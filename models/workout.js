const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutScheema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter a type of exercise",
        },
        name: {
          type: String,
          trim: true,
          required: "Enter an exercise",
        },
        duration: {
          type: Number,
          required: "Enter an exercise duration",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
//function that calculates total duration
workoutScheema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutScheema);

module.exports = Workout;
