const kneeExercises = require("../db/exercise-data/kneeExercises");

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
    kneeExercisesService
    .read(req.params.exerciseId)
    .then((exercise) => {
        if (exercise) {
            res.locals.exercise = exercise; 
            return next();
        }
        next({
            status: 404, 
            message: "Exercise cannot be found."
        });
    })
    .catch(next);
}

// Creates a new exercise. Used with POST request
function create(req, res, next) {
    const { data: { id, category, name } = {} } = req.body;

    const newExercise = {
        id: ++lastExerciseId,
        category, 
        name,
    };

    kneeExercises.push(newExercise);
    res.status(201).json({ data: newExercise });
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

function update(req, res) {
    // Define exercise from response locals object
    const exercise = res.locals.exercise 
    // Define request body 
    const { data: { category, name } = {} } = req.body; 
    // Update the exercise
    exercise.category = category; 
    exercise.name = name; 
    // Respond with the json of the updated exercise
    res.json({ data: exercise });
}

function destroy(req, res) {
    const { exerciseId } = req.params; 
    const index = exercises.findIndex((exercise) => exercise.id === Number(exerciseId));
    // splice() returns an array of deleted elements
    const deletedExercise = exercises.splice(index, 1);
    res.sendStatus(204);
}

module.exports = {
    create: [bodyHasData("category"), bodyHasData("name"), categoryHasValidValue, create],
    read: [exerciseExists, read],
    update: [bodyHasData("name"), bodyHasData("category") , exerciseExists, update],
    list, 
    delete: [exerciseExists, destroy],
}