import React from "react";
import KneePage from "./KneePage";

/* 
Card will display an image, 
a title, 
a text, 
and a button to go directly to that exercise's web page 
*/

function KneePageCard() {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src="..." alt="knee exercise" />
        <div className="card-body">
          <div className="card-title">Knee Page Card</div>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/knee-page-card" className="btn btn-primary">
            Go Somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default KneePageCard;
