const exercises = require("../data/exercise-data");

let lastExerciseId = exercises.reduce((maxId, exercise) => Math.max(maxId, exercise.id), 0);

// VALIDATION MIDDLEWARE FUNCTIONS

// Validate that created exercise has category
function bodyHasCategory(req, res, next) {
    const { data: { category } = {} } = req.body; 
    if (category) {
        return next(); 
    } else {
        next({
            status: 400,
            message: "A 'category' property is required."
        });
    }
}

// Validate that created exercise has a name 
function bodyHasName(req, res, next) {
    const { data: { name } = {} } = req.body; 
    if (name) {
        return next(); 
    } else {
        next({
            status: 400,
            message: "A 'name' property is required."
        });
    }
}

// Creates a new exercise. Used with POST request
function create(req, res, next) {
    const { data: { id, category, name } = {} } = req.body;

    const newExercise = {
        id: ++lastExerciseId,
        category, 
        name,
    };

    exercises.push(newExercise);
    res.status(201).json({ data: newExercise });
}

// View full list of exercises
function list(req, res, next) {
    res.json({ data: exercises });
}

// View exercise data in json format by Exercise Id; used with GET /exercises/:exerciseId
function read(req, res, next) {
    const exerciseId = req.params.exerciseId; 
    const foundExercise = exercises.find((exercise) => exercise.id === Number(exerciseId));

    if (foundExercise) {
        res.json({ data: foundExercise });
    } else {
        next(`Exercise ID not found: ${exerciseId}`);
    }
}

module.exports = {
    create: [bodyHasCategory, bodyHasName, create],
    read,
    list, 
}