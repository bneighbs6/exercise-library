import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import HipPageCard from "./HipPageCard";
import ExercisePage from "../../Components/ExercisePage";

function HipExercisePage() {
  return <ExercisePage exerciseType="hip" ExerciseCard={HipPageCard} />
}

export default HipExercisePage;
