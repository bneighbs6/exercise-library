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

  function handleSubmit(e) {
    e.preventDefault();
    const abortController = new AbortController(); 
    setError(null);
    createExercise(exercise, abortController.signal)
    .then(() => {
      navigate("/new-exercise");
      console.log(exercise);
    })
    .catch(setError);
    return () => abortController.abort(); 
  }

  function handleCancel(e) {
    console.log("Form cancelled.");
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
                <label htmlFor="exerciseNameInput">Exercise Name</label>
                <input
                  type="text"
                  className="form-control text-center"
                  id="exerciseNameInput"
                  name="exerciseName"
                  placeholder="Exercise name here"
                />
              </div>
              <div className="form-group" id="exercisePattern">
                <label htmlFor="exercisePatternInput">Exercise Pattern</label>
                <input
                  type="text"
                  className="form-control text-center"
                  id="exercisePatternInput"
                  name="exerciseType"
                  placeholder="Push, Pull, Hip, Knee, or Core"
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
