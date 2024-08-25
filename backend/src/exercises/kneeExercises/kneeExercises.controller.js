const kneeExercises = require("../../db/exercise-data/kneeExercises");

const kneeExercisesService = require("./kneeExercises.service");

let lastExerciseId = kneeExercises.reduce((maxId, exercise) => Math.max(maxId, exercise.id), 0);

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
    const { data: { exercise_category } = {} } = req.body; 
    const validCategory = ["Push", "Pull", "Hip", "Knee"];
    if (validCategory.includes(exercise_category)) {
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
    kneeExercisesService
    .read(req.params.exerciseId)
    .then((exercise) => {
        if (exercise) {
            res.locals.exercise = exercise; 
            return next();
        }
        next({
            status: 404, 
            message: `Exercise cannot be found by id: ${req.params.exerciseId}`
        });
    })
    .catch(next);
}

// Creates a new exercise. Used with POST request
function create(req, res, next) {
    kneeExercisesService
    .create(req.body.data)
    .then((data) => res.status(201).json({ data }))
    .catch(next);
}

// View full list of exercises
function list(req, res, next) {
    kneeExercisesService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}

// View exercise data in json format by Exercise Id; used with GET /exercises/:exerciseId
function read(req, res, next) {
    const { exercise: data } = res.locals; 
    res.json({ data });
}

function update(req, res, next) {
    const updatedExercise = {
        ...req.body.data,
        exercise_id: res.locals.exercise.exercise_id, // Always set to the existing exercise_id
    };
    kneeExercisesService
    .update(updatedExercise)
    .then((data) => res.json({ data }))
    .catch(next);
}

function destroy(req, res, next) {
    kneeExercisesService
    .delete(res.locals.exercise.exercise_id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
    create: [bodyHasData("exercise_category"), bodyHasData("exercise_name"), categoryHasValidValue, create],
    read: [exerciseExists, read],
    update: [bodyHasData("exercise_category"), bodyHasData("exercise_name"), categoryHasValidValue, exerciseExists, update],
    list, 
    delete: [exerciseExists, destroy],
}