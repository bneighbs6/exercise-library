const router = require("express").Router(); 

const methodNotAllowed = require("../../errors/methodNotAllowed");

const controller = require("./pushExercises.controller");

// TODO: code necessary routes

router.route("/:exerciseId")
.get(controller.read)
.put(controller.update)
.all(methodNotAllowed);

router.route("/")
.get(controller.list)
.post(controller.create)
.all(methodNotAllowed);

module.exports = router; 