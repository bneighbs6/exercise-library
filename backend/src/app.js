// Require Express package and assign to variable
const express = require("express");

// Require Morgan package
// Morgan will print useful info to terminal window on each request
const morgan = require("morgan");

// Exercise data from data folder
const exercises = require("./data/exercise-data");

// const sayHello = (req, res, next) => {
//     res.send("Hello!");
//     next(); 
// }

// Logs the req.query object to the console
// If name query parameter exists, it sends the first message, otherwise send the second message
// const saySomethingCool = (req, res, next) => {
//     console.log(req.query);
//     const name = req.query.name;
//     let message = name ? `Sup ${name}?` : "I'm cool, dawg";
//     res.send(message);
// }

// Build a route using route parameters
// const sayGreeting = (req, res, next) => {
//     console.log(req.params);
//     const greeting = req.params.greeting; 
//     const content = `${greeting}!`;
//     res.send(content)
// }

// const useBothQueryAndParameter = (req, res, next) => {
//     console.log(req.params);
//     console.log(req.query);

//     const sport = req.params.sport;
//     const athlete = req.query.athlete; 

//     const content = athlete ? `${sport}, ${athlete}` : "You need to enter either a query or a parameter.";
//     res.send(content)
// }

// const throwError = (req, res, next) => {
//     const exercise = req.params.exercise; 
//     if (!exercise) {
//         next("No exercise parameter was given.")
//     } else {
//         res.send(`${exercise} is a great exercise`);
//     }
// }

const viewExercises = (req, res, next) => {
    res.json({ data: exercises });
}

// Express package exports a function, when invoked, a new Express app is created and assigned to a variable
const app = express();

// Route set up 
app.use(morgan("dev"));
// app.get("/hello", sayHello);
// app.get("/cool", saySomethingCool);
// Route using route parameters to edit what is sent on the response
// app.get("/say/:greeting", sayGreeting);

// Route using both query and parameters
// http://localhost:8000/both/football/?athlete=elliot will produce => football, elliot
// app.get("/both/:sport", useBothQueryAndParameter);

// app.get("/exercise/:exercise", throwError);

// View exercise data in json format
app.get("/exercises", viewExercises);

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