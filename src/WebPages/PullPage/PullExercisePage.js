import React from "react";
import ExercisePage from "../../Components/ExercisePage";
import PullPageCard from "./PullPageCard";

function PullExercisePage() {
    return <ExercisePage exerciseType="pull" ExerciseCard={PullPageCard} />
}

export default PullExercisePage; 