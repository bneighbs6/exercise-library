import React from "react";

/* 
Card will display an image, 
a title, 
a text, 
and a button to go directly to that exercise's web page 
*/

function PullPageCard() {
  return (
    <>
      <div className="card mx-auto my-3" style={{ width: "18rem" }}>
        <img className="card-img-top" src="..." alt="Push exercise" />
        <div className="card-body">
          <h5 className="card-title">Pull Page Card</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="pull-page-card" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default PullPageCard;
