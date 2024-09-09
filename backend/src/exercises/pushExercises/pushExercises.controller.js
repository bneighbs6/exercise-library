const pushExercises = require("../../db/exercise-data/pushExercises");

const service = require("./pushExercises.service");

const asyncErrorBoundary = require("../../errors/asyncErrorBoundary");

let lastExerciseId = pushExercises.reduce((maxId, exercise) => Math.max(maxId, exercise.id), 0);

function list(req, res, next) {
    service.list()
    .then((data) => res.json({ data }))
    .catch(next);
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

/* VALIDATION MIDDLEWARE for READ */

function exerciseExists(req, res, next) {
    service
    .read(req.params.exerciseId)
    .then((exercise) => {
        if (exercise) {
            res.locals.exercise = exercise; 
            return next();
        }
        next({ status: 404, message: `Exercise cannot be found`});
    })
    .catch(next);
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

function create(req, res, next) {
    service.create(req.body.data)
    .then((data) => res.status(201).json({ data }))
    .catch(next);
}

function read(req, res, next) {
    const { exercise: data } = res.locals; 
    res.json({ data });
}

function update(req, res, next) {
    const updatedExercise = {
        ...req.body.data,
        exercise_id: res.locals.exercise.exercise_id,
    };
    service
    .update(updatedExercise)
    .then((data) => res.json({ data }))
    .catch(next);
}

function destroy(req, res, next) {
    service
    .delete(res.locals.exercise.exercise_id)
    .then(() => res.status(204))
    .catch(next);
}

module.exports = {
    create: [bodyHasData("exercise_category"), bodyHasData("exercise_name"), categoryHasValidValue, create],
    read: [exerciseExists, read],
    update: [exerciseExists, bodyHasData("exercise_category"), bodyHasData("exercise_name"), categoryHasValidValue, update],
    delete: [exerciseExists, destroy],
    list, 
}
