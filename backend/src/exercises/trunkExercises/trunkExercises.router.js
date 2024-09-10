const router = require("express").Router(); 

const controller = require("./trunkExercises.controller");

const methodNotAllowed = require("../../errors/methodNotAllowed");

router.route("/:exerciseId([0-9]+)")
.get(controller.read)
.put(controller.update)
.delete(controller.delete)
.all(methodNotAllowed);

router.route("/")
.get(controller.list)
.post(controller.create)
.all(methodNotAllowed);

module.exports = router; 