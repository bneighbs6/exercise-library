import React from "react";
import { useNavigate } from "react-router-dom";

function NewExercisePage() {
    const navigate = useNavigate();

/* You need to create an actual submit button */  
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted.")
        return navigate("/new-exercise");
    }

    function handleCancel(e) {
        console.log("Form cancelled.")
        return navigate("/new-exercise");
    }

    return (
        <>
        <div className="card text-center mx-auto" style={{width: "60rem"}}>
            <div className="card-title">
                <h1>New Exercise</h1>
            </div>
        <form>
        <div className="form-group" id="exerciseName">
            <label htmlFor="exerciseNameInput">Exercise Name</label>
            <input type="text" className="form-control text-center" id="exerciseNameInput" name="exerciseName" placeholder="Exercise name here" />
        </div>
        <div className="form-group" id="exercisePattern">
            <label htmlFor="exercisePatternInput">Exercise Pattern</label>
            <input type="text" className="form-control text-center" id="exercisePatternInput" name="exerciseType" placeholder="Push, Pull, Hip, Knee, or Core" />
        </div>
        <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
        <button className="btn btn-danger" onClick={handleCancel}>Cancel</button>
    </form>
        </div>
        </>
    )
}

export default NewExercisePage;