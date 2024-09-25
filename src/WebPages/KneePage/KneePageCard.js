// KneePageCard.js
import React from "react";
import { Card } from "react-bootstrap";
import DeleteExerciseButton from "../../Components/DeleteButtons/DeleteExerciseButton";

function KneePageCard({ exercise }) {
  return (
    <Card
      className="mx-auto my-3"
      style={{ width: "18rem", backgroundColor: "black", color: "white" }}
    >
      <img className="card-img-top" src="..." alt={exercise.exercise_name} />
      <div className="card-body">
        <div className="card-title">
          <h1>{exercise.exercise_name}</h1>
        </div>
        <div className="card-text">
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div>
          <a
            href={`/knee-page-card/${exercise.exercise_id}`}
            className="btn btn-danger"
          >
            Exercise Details
          </a>
        </div>
        <div className="mx-auto my-3">
          <DeleteExerciseButton exercise={exercise} />
        </div>
      </div>
    </Card>
  );
}

export default KneePageCard;
