import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import HipPageCard from "./HipPageCard";

function HipExercisePage() {
  const [exercise, setExercise] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { exerciseId } = useParams(); 

  const loadExercise = async () => {
    setLoading(true);
    try {
        const response = await fetch(`https://exercise-library-backend.onrender.com/hip-exercises/${exerciseId}`);
        console.log(response)
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
    <h1 className="text-center">Hip Exercise</h1>
        {loading ? (
            <h1 className="text-center">Loading Exercise...</h1>
        ) : (
            <Row>
                <h1>{exercise.exercise_name}</h1>
                <Col key={exercise.exercise_id} xs={12} md={4} lg={3}>
                    <HipPageCard exercise={exercise} loadExercises={loadExercise} />
                </Col>
            </Row>
        )}
    </>
  )
}

export default HipExercisePage; 