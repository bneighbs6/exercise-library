// Require router from express & assign to variable
const router = require("express").Router(); 

// Require controller to be used in this file & assign to variable
const controller = require("./exercises.controller");

router.route("/:exerciseId")
.get(controller.read);

router.route("/")
.get(controller.list);

module.exports = router; 