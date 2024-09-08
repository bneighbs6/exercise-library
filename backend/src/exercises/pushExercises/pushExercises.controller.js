// TODO: Code all necesssary controller functions including middleware

const pushExercises = require("../../db/exercise-data/pushExercises");

const asyncErrorBoundary = require("../../errors/asyncErrorBoundary");

let lastExerciseId = pushExercises.reduce((maxId, exercise) => Math.max(maxId, exercise.id), 0);

function list(req, res) {
    res.json({ data: pushExercises });
}

function bodyHasData(propertyName) {
    return function (req, res, next) {
        const { data: { exercise_name } = {} } = req.body; 
        if (exercise_name) {
            return next();
        }
        next({
            status: 400, 
            message: "A 'name' property is required.",
        });
    }
}

function create(req, res, next) {
    const { data: { exercise_category, exercise_name } = {} } = req.body; 
    const newExercise = {
        id: ++lastExerciseId,
        exercise_category,
        exercise_name,
    };
    pushExercises.push(newExercise);
    res.status(201).json({ data: newExercise });
}

module.exports = {
    create: [bodyHasData("exercise_category"), bodyHasData("exercise_name"), create],
    list, 
}