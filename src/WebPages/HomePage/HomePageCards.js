import React from "react";
import { useNavigate } from "react-router-dom";

function HomePageCard({ exerciseType, exerciseUrl }) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/${exerciseUrl}-exercises`)
    }
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="exercise" />
                <div className="card-body">
                    <h5 className="card-title">{`${exerciseType} Exercises`}</h5>
                    <p className="card-text">
                        {`Click here to find ${exerciseType} dominant exercises for your program`}
                    </p>
                    <button
                        onClick={handleClick}
                        className="btn btn-primary">
                        💪 {`${exerciseType} Exercises`}
                    </button>
                </div>
            </div>
        </>
    )
}

export default HomePageCard; 