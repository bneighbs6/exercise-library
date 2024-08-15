// Require Express package and assign to variable
const express = require("express");

// Require Morgan package
// Morgan will print useful info to terminal window on each request
const morgan = require("morgan");

const sayHello = (req, res, next) => {
    res.send("Hello!");
    next(); 
}

// Express package exports a function, when invoked, a new Express app is created and assigned to a variable
const app = express();

app.use(morgan("dev"));
app.get("/hello", sayHello);

// Export Express app to be used in other files
module.exports = app; 