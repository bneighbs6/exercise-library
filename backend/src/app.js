// Require Express package and assign to variable
const express = require("express");

// Require Morgan package
// Morgan will print useful info to terminal window on each request
const morgan = require("morgan");

const sayHello = (req, res, next) => {
    res.send("Hello!");
    next(); 
}

// Logs the req.query object to the console
// If name query parameter exists, it sends the first message, otherwise send the second message
const saySomethingCool = (req, res, next) => {
    console.log(req.query);
    const name = req.query.name;
    let message = name ? `Sup ${name}?` : "I'm cool, dawg";
    res.send(message);
}

// Build a route using route parameters
const sayGreeting = (req, res, next) => {
    const greeting = req.params.greeting; 
    const content = `${greeting}!`;
    res.send(content)
}

// Express package exports a function, when invoked, a new Express app is created and assigned to a variable
const app = express();

// Route set up 
app.use(morgan("dev"));
app.get("/hello", sayHello);
app.get("/cool", saySomethingCool);
app.get("/say/:greeting", sayGreeting);

// Export Express app to be used in other files
module.exports = app; 