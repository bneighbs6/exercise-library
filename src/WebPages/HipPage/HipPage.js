import React from "react";
import HipPageCard from "./HipPageCard";
import { Row, Col } from "react-bootstrap";

function HipPage() {
  return (
    <>
      <h1 className="text-center">Hip Exercises</h1>
      <Row>
        <Col>
          <HipPageCard />
        </Col>
        <Col>
          <HipPageCard />
        </Col>
        <Col>
          <HipPageCard />
        </Col>
        <Col>
          <HipPageCard />
        </Col>
      </Row>
    </>
  );
}

export default HipPage;
