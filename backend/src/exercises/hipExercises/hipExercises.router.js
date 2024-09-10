// Require router from express & assign to varialbe
const router = require("express").Router(); 

const methodNotAllowed = require("../../errors/methodNotAllowed");

const controller = require("./hipExercises.controller");

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