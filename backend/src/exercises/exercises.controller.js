const exercises = require("../data/exercise-data");

let lastExerciseId = exercises.reduce((maxId, exercise) => Math.max(maxId, exercise.id), 0);

function create(req, res, next) {
    const { data: { id, category, name } = {} } = req.body;

    const newExercise = {
        id: ++lastExerciseId,
        category, 
        name,
    };

    exercises.push(newExercise);
    res.json({ data: newExercise });
}

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
    create,
    read,
    list, 
}