import React, { useEffect, useState } from "react";
import HipPageCard from "./HipPageCard";
import ExercisePage from "../../Components/ExercisePage";

function HipExercisePage() {
  return <ExercisePage exerciseType="hip" ExerciseCard={HipPageCard} />
}

export default HipExercisePage;
