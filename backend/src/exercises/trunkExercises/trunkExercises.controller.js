const service = require("./trunkExercisees.service");

const asyncErrorBoundary = require("../../errors/asyncErrorBoundary");

/* VALIDATION MIDDLEWARE */

// Validate that created exercise has category
function bodyHasData(propertyName) {
  return function (req, res, next) {
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
  const validCategory = ["Push", "Pull", "Hip", "Knee", "Trunk"];
  if (validCategory.includes(exercise_category)) {
    return next();
  } else {
    next({
      status: 400,
      message: `Value of 'category' property must be one of ${validCategory}. Received ${category}`,
    });
  }
}

async function exerciseExists(req, res, next) {
  const exercise = await service.read(req.params.exerciseId);
  if (exercise) {
    res.locals.exercise = exercise;
    return next();
  } else {
    next({
      status: 404,
      message: `Exercise ID ${req.params.exerciseId} cannot be found.`,
    });
  }
}

/* CRUDL Functions */

// Creates a new exercise. Used with POST request
async function create(req, res, next) {
  const data = await service.create(req.body.data);
  res.status(201).json({ data });
}

// View exercise data in json format by Exercise Id; used with GET /exercises/:exerciseId
function read(req, res, next) {
  const { exercise: data } = res.locals;
  res.json({ data });
}

async function update(req, res, next) {
  const updatedExercise = {
    ...req.body.data,
    exercise_id: res.locals.exercise.exercise_id, // Always set to the existing exercise_id
  };
  const data = await service.update(updatedExercise);
  res.json({ data });
}

async function destroy(req, res, next) {
  const exercise = res.locals.exercise;
  await service.delete(exercise.exercise_id);
  res.sendStatus(204);
}

// View full list of exercises
async function list(req, res, next) {
  console.log("Trunk services controller, list() function started.");
  const data = await service.list();
  console.log(data);
  console.log("List completed in controller.");
  res.json({ data });
}

module.exports = {
  create: [
    bodyHasData("exercise_category"),
    bodyHasData("exercise_name"),
    categoryHasValidValue,
    asyncErrorBoundary(create),
  ],
  read: [asyncErrorBoundary(exerciseExists), read],
  update: [
    bodyHasData("exercise_category"),
    bodyHasData("exercise_name"),
    categoryHasValidValue,
    asyncErrorBoundary(exerciseExists),
    asyncErrorBoundary(update),
  ],
  list: asyncErrorBoundary(list),
  delete: [asyncErrorBoundary(exerciseExists), asyncErrorBoundary(destroy)],
};