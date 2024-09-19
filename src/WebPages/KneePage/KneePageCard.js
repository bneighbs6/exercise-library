import React from "react";
import { Card } from "react-bootstrap";

function KneePageCard() {
  return (
    <>
      <Card className="mx-auto my-3" style={{ width: "18rem", backgroundColor: "black", color: "white" }}>
        <img className="card-img-top" src="..." alt="knee exercise" />
        <div className="card-body">
          <div className="card-title">Knee Page Card</div>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/knee-page-card" className="btn btn-danger">
            Go Somewhere
          </a>
        </div>
      </Card>
    </>
  );
}

export default KneePageCard;
