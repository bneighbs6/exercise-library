// KneePageCard.js
import React from "react";
import { Card } from "react-bootstrap";

function KneePageCard({ exercise }) {
  return (
    <Card className="mx-auto my-3" style={{ width: "18rem", backgroundColor: "black", color: "white" }}>
      <img className="card-img-top" src="..." alt="knee exercise" />
      <div className="card-body">
        <h5 className="card-title">{exercise.exercise_name}</h5>
        <p className="card-text">
          {exercise.exercise_category}
        </p>
        <a href={`/knee-page-card/${exercise.exercise_id}`} className="btn btn-danger">
          Go Somewhere
        </a>
      </div>
    </Card>
  );
}

export default KneePageCard;
