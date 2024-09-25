import React from "react";
import { Button } from "react-bootstrap";
import { deleteExercise } from "../utils/api";

function DeleteExerciseButton({ exercise, loadExercises, exerciseType }) {

    async function handleClick() {
        if (window.confirm("Are you sure you want to delete this exercise? This cannot be undone.")) {
            await deleteExercise(exerciseType, exercise.exercise_id)
            loadExercises(); 
        }
    }

    return (
        <Button className="btn btn-danger" onClick={() => handleClick()} >
            Delete Exercise
        </Button>
    )
}

export default DeleteExerciseButton; 