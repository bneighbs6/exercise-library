import React, { useEffect, useState } from "react";
import KneePageCard from "./KneePageCard";
import ExercisePage from "../../Components/ExercisePage";

function KneeExercisePage() {
  return <ExercisePage exerciseType="knee" ExerciseCard={KneePageCard} />
}

export default KneeExercisePage;