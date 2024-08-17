const exercises = require("../data/exercise-data");

function list(req, res, next) {
    res.json({ data: exercises });

}

// View exercise data in json format by Exercise Id; used with GET /exercises/:exerciseId
const viewExerciseById = (req, res, next) => {
    const exerciseId = req.params.exerciseId; 
    const foundExercise = exercises.find((exercise) => exercise.id === Number(exerciseId));

    if (foundExercise) {
        res.json({ data: foundExercise });
    } else {
        next(`Exercise ID not found: ${exerciseId}`);
    }
}

module.exports = {
    list, 
}