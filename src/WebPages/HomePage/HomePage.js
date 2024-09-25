import React from "react";
import HomePageCard from "./HomePageCards";
import { Container, Row, Col } from "react-bootstrap";

function HomePage() {
    return (
        <>
            <Container>
                <Row>
                    <Col className="col-sm text-center">
                    <h2 className="text-center my-auto">Upper Body</h2>
                        <HomePageCard exerciseType={"Push"} exerciseUrl={"push"} />
                        <HomePageCard exerciseType={"Pull"} exerciseUrl={"pull"} />
                    </Col>

                    <Col className="col-sm text-center">
                    <h2 className="text-center my-auto">Lower Body</h2>
                        <HomePageCard exerciseType={"Hip"} exerciseUrl={"hip"} />
                        <HomePageCard exerciseType={"Knee"} exerciseUrl={"knee"} />
                    </Col>

                    <Row className="mx-auto">
                        <Col className="text-center">
                        <h2 className="text-center my-auto">Trunk</h2>
                            <HomePageCard exerciseType={"Trunk"} exerciseUrl={"trunk"} />
                        </Col>
                    </Row>

                </Row>
            </Container>
        </>
    )
}

export default HomePage;