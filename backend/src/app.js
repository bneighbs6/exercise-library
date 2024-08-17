// Require Express package and assign to variable
const express = require("express");

// Require exercises router
const exercisesRouter = require("./exercises/exercises.router");

// Require Morgan package
// Morgan will print useful info to terminal window on each request
const morgan = require("morgan");

// Exercise data from data folder
const exercises = require("./data/exercise-data");

// View exercise data in json format; used with GET /exercises
const viewExercises = (req, res, next) => {
    res.json({ data: exercises });
}

// Express package exports a function, when invoked, a new Express app is created and assigned to a variable
const app = express();

// Route set up 
app.use(morgan("dev"));

// View exercise data in json format by Exercise Id
// app.use("/exercises/:exerciseId", viewExerciseById);

// View exercise data in json format
app.use("/exercises", exercisesRouter);

// Route not found handler
app.use((req, res, next) => {
    res.send(`The route ${req.path} does not exist.`)
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.send(err);
})

// Export Express app to be used in other files
module.exports = app; 