import React from "react";
import { Button } from "react-bootstrap";
import { deletePushExercise } from "../../utils/api";

function DeletePushExerciseButton({ exercise, loadExercises }) {

    async function handleClick() {
        if (window.confirm("Are you sure you want to delete this exercise? This cannot be undone.")) {
            await deletePushExercise(exercise.exercise_id)
            loadExercises(); 
        }
    }

    return (
        <Button className="btn btn-danger" onClick={() => handleClick()} >
            Delete Exercise
        </Button>
    )
}

export default DeletePushExerciseButton; 