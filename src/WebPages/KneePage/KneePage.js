import React from "react";
import KneePageCard from "./KneePageCard";
import { Row, Col } from "react-bootstrap";

export default function KneePage() {
  return (
    <>
      <h1>Knee Dominant Exercises</h1>
      <Row>
        <Col>
            <KneePageCard />
        </Col>
        <Col>
            <KneePageCard />
        </Col>
        <Col>
            <KneePageCard />
        </Col>
        <Col>
            <KneePageCard />
        </Col>
      </Row>
    </>
  );
}
