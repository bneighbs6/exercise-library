import React, { useEffect, useState } from "react";
import KneePageCard from "./KneePageCard";
import { Row, Col } from "react-bootstrap";
import { listKneeExercise } from "../../utils/api";

export default function KneePage() {
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Defining loadExercises so that I can easily pass it down as a prop to the card
  const loadExercises = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://exercise-library-backend.onrender.com/knee-exercises");
      const exercisesFromAPI = await response.json(); 
      setExercises(exercisesFromAPI.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadExercises();
  }, []);

  return (
    <>
      <h1 className="text-center">Knee Exercises</h1>
      {loading ? (
        <h1>Loading Knee Exercises...</h1>
      ) : (
        <Row>
          {exercises.length > 0 ? (
            exercises.map(exercise => (
              <Col key={exercise.exercise_id} xs={12} md={4} lg={3}>
                <KneePageCard exercise={exercise} loadExercises={loadExercises} />
              </Col>
            ))
          ) : (
            <Col xs={12}>
              <p>No exercises found.</p>
            </Col>
          )}
        </Row>
      )}
      {error && <div>Error: {error.message}</div>}
    </>
  );
}