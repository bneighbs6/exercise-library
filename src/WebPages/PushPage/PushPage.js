import React from "react";
import PushPageCard from "./PushPageCard";
import { Row, Col } from "react-bootstrap";

export default function PushPage() {
  return (
    <>
      <h1 className="text-center">Push Exercises</h1>
      <Row>
        <Col>
          <PushPageCard />
        </Col>
        <Col>
          <PushPageCard />
        </Col>
        <Col>
          <PushPageCard />
        </Col>
        <Col>
          <PushPageCard />
        </Col>
      </Row>
    </>
  );
}
