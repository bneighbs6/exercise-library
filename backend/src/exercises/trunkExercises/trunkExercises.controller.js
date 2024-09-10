// TODO: Create middleware and CRUDL fx

const service = require("./trunkExercisees.service");

const asyncErrorBoundary = require("../../errors/asyncErrorBoundary");

/* VALIDATION MIDDLEWARE */

function bodyHasData(propertyName) {
    return function (req, res, next) {
      const { data: { exercise_name } = {} } = req.body;
      if (exercise_name) {
        return next();
      }
      next({
        status: 400,
        message: `A ${propertyName} is required.`,
      });
    };
  }
  
  // Validates that exercise exists by its id
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
  
  /* CRUDL Functions */
  
  async function create(req, res, next) {
    const data = await service.create(req.body.data);
    res.status(201).json({ data });
  }
  
  function read(req, res, next) {
    const { exercise: data } = res.locals;
    res.json({ data });
  }
  
  async function update(req, res, next) {
    const updatedExercise = {
      ...req.body.data,
      exercise_id: res.locals.exercise.exercise_id,
    };
    const data = await service.update(updatedExercise);
    res.json({ data });
  }
  
  async function destroy(req, res, next) {
    const { exercise } = res.locals;
    await service.delete(exercise.exercise_id);
    res.sendStatus(204);
  }
  
  async function list(req, res, next) {
    const data = await service.list();
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
      asyncErrorBoundary(exerciseExists),
      bodyHasData("exercise_category"),
      bodyHasData("exercise_name"),
      categoryHasValidValue,
      asyncErrorBoundary(update),
    ],
    delete: [asyncErrorBoundary(exerciseExists), asyncErrorBoundary(destroy)],
    list: asyncErrorBoundary(list),
  };