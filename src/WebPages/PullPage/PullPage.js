import React from "react";
import PullPageCard from "./PullPageCard";
import { Row, Col } from "react-bootstrap";

function PullPage() {
  return (
    <>
      <h1>Pull Exercises</h1>
      <Row>
        <Col>
          <PullPageCard />
        </Col>
        <Col>
          <PullPageCard />
        </Col>
        <Col>
          <PullPageCard />
        </Col>
        <Col>
          <PullPageCard />
        </Col>
      </Row>
    </>
  );
}

export default PullPage;