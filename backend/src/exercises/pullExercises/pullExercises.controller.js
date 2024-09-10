const service = require("./pullExercises.service");

const asyncErrorBoundary = require("../../errors/asyncErrorBoundary");

/* VALIDATION MIDDLEWARE */

function bodyHasData(propertyName) {
  return function (req, res, next) {
    const { data: { exercise_name, exercise_category } = {} } = req.body;
    if (exercise_name && exercise_category) {
      return next();
    }
    next({
      status: 404,
      message: `A ${propertyName} is required.`,
    });
  };
}

async function exerciseExists(req, res, next) {
  const exercise = await service.read(req.params.exerciseId);
  if (exercise) {
    res.locals.exercise = exercise;
    return next();
  }
  next({
    status: 404,
    message: `Exercise ID ${req.params.exerciseId} cannot be found.`,
  });
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
