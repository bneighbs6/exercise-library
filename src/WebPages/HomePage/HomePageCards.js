import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

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
      <Card
        className="mx-auto my-3"
        style={{ width: "18rem", backgroundColor: "black", color: "white" }}
      >
        {/* <img src="..." className="card-img-top" alt="exercise" /> */}
        {/* TODO: Install CORS so we can use my youtube videos */}
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/shorts/SUfRvAddhUk"
            allowFullScreen
          ></iframe>
        </div>
        <div className="card-body">
          <h5 className="card-title">{`${exerciseType} Exercises`}</h5>
          <p className="card-text">
            {`Click here to find ${exerciseType} dominant exercises for your program`}
          </p>
          <Button onClick={handleClick} variant="danger">
            💪 {`${exerciseType} Exercises`}
          </Button>
        </div>
      </Card>
    </>
  );
}

export default HomePageCard;
