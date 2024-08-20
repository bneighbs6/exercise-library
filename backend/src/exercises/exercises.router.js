// Require router from express & assign to variable
const router = require("express").Router(); 

// Require method not allowed error handler
const methodNotAllowed = require("../errors/methodNotAllowed");

// Require controller to be used in this file & assign to variable
const controller = require("./exercises.controller");

router.route("/:exerciseId")
.get(controller.read)
.all(methodNotAllowed);

router.route("/")
.get(controller.list)
.post(controller.create)
.all(methodNotAllowed);

module.exports = router; 