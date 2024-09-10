const router = require("express").Router();

const exercises = require("../../db/exercise-data/pullExercises");

router.route("/").get((req, res, next) => {
    res.json({ data: exercises });
});

module.exports = router; 