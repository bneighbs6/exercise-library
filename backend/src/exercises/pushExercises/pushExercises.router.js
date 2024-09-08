const router = require("express").Router(); 

const methodNotAllowed = require("../../errors/methodNotAllowed");

// TODO: code necessary routes

router.route("/:exerciseId")
.get((req, res, next) => {
    res.send("You need to set up /:exerciseId route");
})
.all(methodNotAllowed);

router.route("/")
.get((req, res, next) => {
    res.send("Welcome to /push-exercises route");
})
.all(methodNotAllowed);

module.exports = router; 