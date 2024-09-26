import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import KneePageCard from "./KneePageCard";

function KneeExercisePage() {
  const [exercise, setExercise] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { exerciseId } = useParams();

  const loadExercise = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://exercise-library-backend.onrender.com/knee-exercises/${exerciseId}`
      );
      console.log(response);
      const exerciseFromAPI = await response.json();
      console.log(exerciseFromAPI);
      setExercise(exerciseFromAPI.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadExercise();
  }, []);

  return (
    <>
      <h1 className="text-center">Knee Exercise</h1>
      {loading ? (
        <h1 className="text-center">Loading Exercise...</h1>
      ) : (
        <Row>
          <h1 className="text-center">{exercise.exercise_name}</h1>
          <div className="d-flex align-items-center justify-content-center">
            <Col key={exercise.exercise_id} xs={12} md={4} lg={3}>
              <KneePageCard exercise={exercise} loadExercises={loadExercise} />
            </Col>
          </div>
        </Row>
      )}
    </>
  );
}

export default KneeExercisePage;