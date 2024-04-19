import React from "react";
import CorePageCard from "./CorePageCard"
import { Row, Col} from "react-bootstrap";
function CorePage() {
    return (
        <>
        <h1 className="text-center">Core Exercises</h1>
        <Row>
            <Col>
                <CorePageCard />
            </Col>
            <Col>
                <CorePageCard />
            </Col>
            <Col>
                <CorePageCard />
            </Col>
            <Col>
                <CorePageCard />
            </Col>
        </Row>
        </>
    )
}

export default CorePage;