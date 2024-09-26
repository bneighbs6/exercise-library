import React from "react";
import ExercisePage from "../../Components/ExercisePage";
import TrunkPageCard from "./TrunkPageCard";

function TrunkExercisePage() {
    return <ExercisePage exerciseType="trunk" ExerciseCard={TrunkPageCard} />
}

export default TrunkExercisePage; 