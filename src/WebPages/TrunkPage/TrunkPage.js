import React, { useState, useEffect } from "react";
import TrunkPageCard from "./TrunkPageCard"
import { Row, Col} from "react-bootstrap";

function TrunkPage() {
    const [exercises, setExercises] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadExercises()  {
          setLoading(true);
          try {
            const response = await fetch("https://exercise-library-backend.onrender.com/trunk-exercises");
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
        <h1 className="text-center">Trunk Exercises</h1>
        {loading ? (
            <h1>Loading Trunk Exercises...</h1>
        ) : (
            <Row>
                {exercises.length > 0 ? (
                    exercises.map((exercise) => (
                        <Col key={exercises.exercise_id} xs={12} md={4} lg={3}>
                            <TrunkPageCard exercise={exercise} />
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

export default TrunkPage;