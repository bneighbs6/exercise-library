import React from "react";
import { Button } from "react-bootstrap";

function DeleteExerciseButton({ exercise }) {
    return (
        <Button className="btn btn-danger" onClick={() => console.log("Delete exercise clicked")}>
            Delete Exercise
        </Button>
    )
}

export default DeleteExerciseButton; 