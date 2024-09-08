const router = require("express").Router(); 

const methodNotAllowed = require("../../errors/methodNotAllowed");

const controller = require("./pushExercises.controller");

// TODO: code necessary routes

router.route("/:exerciseId")
.get((req, res, next) => {
    res.send("You need to set up /:exerciseId route");
})
.all(methodNotAllowed);

router.route("/")
.get(controller.list)
.post(controller.create)
.all(methodNotAllowed);

module.exports = router; 