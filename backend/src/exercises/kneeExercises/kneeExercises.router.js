// Require router from express & assign to variable
const router = require("express").Router();

// Require method not allowed error handler
const methodNotAllowed = require("../../errors/methodNotAllowed");

// Require controller to be used in this file & assign to variable
const controller = require("./kneeExercises.controller");

router
  .route("/:exerciseId([0-9]+)")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

router
  .route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
