import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function CreateExercisePage() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted.");
    return navigate("/new-exercise");
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
