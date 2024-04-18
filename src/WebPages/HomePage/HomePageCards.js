import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";

/* 
Card will display an image,
the exercise type as its title,
some text,
a button to go to a web page specific for that exercise
 */

function HomePageCard({ exerciseType, exerciseUrl }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/${exerciseUrl}-exercises`);
  }
  return (
    <>
      <Card className="mx-auto my-5" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="exercise" />
        <div className="card-body">
          <h5 className="card-title">{`${exerciseType} Exercises`}</h5>
          <p className="card-text">
            {`Click here to find ${exerciseType} dominant exercises for your program`}
          </p>
          <button onClick={handleClick} className="btn btn-primary">
            💪 {`${exerciseType} Exercises`}
          </button>
        </div>
      </Card>
    </>
  );
}

export default HomePageCard;
