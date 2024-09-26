import React from "react";
import ExercisePage from "../../Components/ExercisePage";
import PushPageCard from "./PushPageCard";

function PushExercisePage() {
    return <ExercisePage exerciseType="push" ExerciseCard={PushPageCard} />
}

export default PushExercisePage; 