// Require Express package and assign to variable
const express = require("express");

// Express package exports a function, when invoked, a new Express app is created and assigned to a variable
const app = express();

// Export Express app to be used in other files
module.exports = app; 