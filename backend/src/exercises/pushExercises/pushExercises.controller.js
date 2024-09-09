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

function read(req, res, next) {
    const { exercise: data } = res.locals; 
    res.json({ data });
}

function update(req, res, next) {
    // Using the res.locals of the particular req-res cycle
  const exercise = res.locals.exercise; 
  const { data: { exercise_category, exercise_name } = {} } = req.body;

  exercise.exercise_category = exercise_category;
  exercise.exercise_name = exercise_name;

  res.json({ data: foundExercise });
}

function destroy(req, res, next) {
    const { exerciseId } = req.params; 
    const index = pushExercises.find((exercise) => exercise.id === Number(exerciseId));

    const deletedExercise = pushExercises.splice(index, 1);
    res.sendStatus(204);
}

module.exports = {
    create: [bodyHasData("exercise_category"), bodyHasData("exercise_name"), create],
    read: [exerciseExists, read],
    update: [exerciseExists, bodyHasData("exercise_category"), bodyHasData("exercise_name"), update],
    delete: [exerciseExists, destroy],
    list, 
}
