import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import KneePageCard from "./KneePageCard";
import ExercisePage from "../../Components/ExercisePage";

function KneeExercisePage() {
  return <ExercisePage exerciseType="knee" ExerciseCard={KneePageCard} />
}

export default KneeExercisePage;