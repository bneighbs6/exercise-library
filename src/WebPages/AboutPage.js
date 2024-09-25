import React from "react";
import { Container, Row, Col } from "react-bootstrap";
/* 
Page should display a couple of columns describing different parts of the business
Maybe why you created the exercise library
How this library differs from others
*/

export default function AboutPage() {
  return (
    <>
      <h1 className="text-center">About Us</h1>
      <Container>
        <Row>
          <Col className="text-start">
            <h2>About the Company</h2>
            <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse pellentesque tristique aptent pretium ipsum suscipit.
            </p>
          </Col>
          <Col className="text-center">
            <h2>Contact the Company</h2>
            <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse pellentesque tristique aptent pretium ipsum suscipit.
            </p>
          </Col>
          <Col className="text-end">
            <h2>About the Creator</h2>
            <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Habitasse pellentesque tristique aptent pretium ipsum suscipit.
            </p>
          </Col>
        </Row>
      </Container>
      <img
        src="https://jackcityfitness.com/wp-content/uploads/10-Essential-Weight-Lifting-Tips.jpg"
        alt="company logo"
        className="center-image img-fluid"
      />
    </>
  );
}
