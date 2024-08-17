// Require Express package and assign to variable
const express = require("express");

// Require exercises router
const exercisesRouter = require("./exercises/exercises.router");

// Error Handlers
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

// Exercise data from data folder
const exercises = require("./data/exercise-data");

// Express package exports a function, when invoked, a new Express app is created and assigned to a variable
const app = express();

// express.json() creates a body property (req.body)
app.use(express.json());

// Require Morgan package
// Morgan will print useful info to terminal window on each request
const morgan = require("morgan");
app.use(morgan("dev"));

// Route set up 
app.use("/exercises", exercisesRouter);

// welcome route 
// app.use("/", (req, res, next) => {
//     res.send("Welcome to the backend homepage for exercise library")
// })

app.use(notFound)
app.use(errorHandler)

// Export Express app to be used in other files
module.exports = app; 