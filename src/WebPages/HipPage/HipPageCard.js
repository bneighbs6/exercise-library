import React from "react";
import { Card } from "react-bootstrap";

/* 
Card will display an image, 
a title, 
a text, 
and a button to go directly to that exercise's web page 
*/

function HipPageCard() {
  return (
    <>
      <Card className="mx-auto my-3" style={{ width: "18rem", backgroundColor: "black", color: "white" }}>
        <img className="card-img-top" src="..." alt="Hip exercise" />
        <div className="card-body">
          <h5 className="card-title">Hip Page Card</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="hip-page-card" className="btn btn-danger">
            Go somewhere
          </a>
        </div>
      </Card>
    </>
  );
}

export default HipPageCard;
