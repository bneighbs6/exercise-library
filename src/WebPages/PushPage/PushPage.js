import React, { useState, useEffect } from "react";
import PushPageCard from "./PushPageCard";
import { Row, Col } from "react-bootstrap";

export default function PushPage() {

  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadExercises() {
      setLoading(true);
      try {
        const response = await fetch("https://exercise-library-backend.onrender.com/push-exercises");
        const exercisesFromAPI = await response.json(); 
        setExercises(exercisesFromAPI.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    loadExercises();
  }, []);

  return (
    <>
    <h1 className="text-center">Push Exercises</h1>
    {loading ? (
        <h1>Loading Push Exercises...</h1>
    ) : (
        <Row>
            {exercises.length > 0 ? (
                exercises.map((exercise) => (
                    <Col key={exercises.exercise_id} xs={12} md={4} lg={3}>
                        <PushPageCard exercise={exercise} />
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
)
}
