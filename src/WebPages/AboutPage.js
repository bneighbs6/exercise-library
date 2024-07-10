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
          <Col className=" text-start">
            <h2>Some Bullshit</h2>
            <p>
              Some more bullshit that means absolutely nothing! I really just
              want to test out what this looks like on the web page.
            </p>
          </Col>
          <Col className="text-center">
            <h2>Some Bullshit</h2>
            <p>
              Some more bullshit that means absolutely nothing! I really just
              want to test out what this looks like on the web page.
            </p>
          </Col>
          <Col className="text-end">
            <h2>Some Bullshit</h2>
            <p>
              Some more bullshit that means absolutely nothing! I really just
              want to test out what this looks like on the web page.
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
