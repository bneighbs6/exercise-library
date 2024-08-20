const exercises = require("../data/exercise-data");

let lastExerciseId = exercises.reduce((maxId, exercise) => Math.max(maxId, exercise.id), 0);

/* VALIDATION MIDDLEWARE FUNCTIONS for CREATE */

// Validate that created exercise has category
function bodyHasData(propertyName) {
    return function(req, res, next) {
        const { data = {} } = req.body; 
        if (data[propertyName]) {
            return next(); 
        }
        next({ status: 400, message: `Must include a ${propertyName}` });
    };
}

// Validates that the category is a valid value
function categoryHasValidValue(req, res, next) {
    const { data: { category } = {} } = req.body; 
    const validCategory = ["push", "pull", "hip", "knee"];
    if (validCategory.includes(category)) {
        return next(); 
    } else {
        next({
            status: 400,
            message: `Value of 'category' property must be one of ${validCategory}. Received ${category}`,
        });
    }
}

/* VALIDATION MIDDLEWARE for READ */

function exerciseExists(req, res, next) {
    const { exerciseId } = req.params;
    const foundExercise = exercises.find((exercise) => exercise.id === Number(exerciseId));
    if (foundExercise) {
        return next();
    } else {
        next({
            status: 404,
            message: `Exercise id not found: ${exerciseId}`,
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

    res.json({ data: foundExercise });
}

module.exports = {
    create: [bodyHasData("category"), bodyHasData("name"), categoryHasValidValue, create],
    read: [exerciseExists, read],
    list, 
}