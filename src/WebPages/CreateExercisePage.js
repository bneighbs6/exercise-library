import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import createExercise from "../utils/api";

function CreateExercisePage() {
  const navigate = useNavigate();

  const initialFormState = {
    exercise_category: "",
    exercise_name: "",
  };

  const [error, setError] = useState(null);
  const [exercise, setExercise] = useState({ ...initialFormState });

  function handleExerciseNameChange(e) {
    setExercise({ ...exercise, exercise_name: e.target.value });
  }

  function handleExerciseCategoryChange(e) {
    setExercise({ ...exercise, exercise_category: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const abortController = new AbortController(); 
    setError(null);
    createExercise(exercise, abortController.signal)
    .then(() => {
      alert("Exercise created.")
      setExercise({ ...initialFormState })
      navigate("/new-exercise");
      console.log(exercise);
    })
    .catch(setError);
    return () => abortController.abort(); 
  }

  function handleCancel(e) {
    setExercise({ ...initialFormState });
    console.log("Cancel button clicked.")
    return navigate("/new-exercise");
  }

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col>
          <Card className="text-center">
            <div className="card-title">
              <h1>New Exercise</h1>
            </div>
            <Form>
              <div className="form-group" id="exerciseName">
                <label htmlFor="exerciseName">Exercise Name</label>
                <input
                  type="text"
                  className="form-control text-center"
                  id="exerciseNameInput"
                  name="exerciseName"
                  placeholder="Exercise name here"
                  value={exercise.exercise_name}
                  onChange={handleExerciseNameChange}
                />
              </div>
              <div className="form-group" id="exerciseCategory">
                <label htmlFor="exerciseCategory">Exercise Pattern</label>
                <input
                  type="text"
                  className="form-control text-center"
                  id="exercisePatternInput"
                  name="exerciseType"
                  placeholder="Push, Pull, Hip, Knee, or Core"
                  value={exercise.exercise_category}
                  onChange={handleExerciseCategoryChange}
                />
              </div>
              <Button className="btn-success" onClick={handleSubmit}>
                Submit
              </Button>
              <Button className="btn-danger" onClick={handleCancel}>
                Cancel
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateExercisePage;
