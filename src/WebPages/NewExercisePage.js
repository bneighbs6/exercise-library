import React from "react";

function NewExercisePage() {
    return (
        <>
        <div className="card text-center mx-auto" style={{width: "72rem"}}>
            <div className="card-title">
                <h1>New Exercise</h1>
            </div>
        <form>
        <div className="form-group">
            <label for="exerciseName">Exercise Name</label>
            <input type="text" className="form-control text-center" placeholder="Exercise name here" />
        </div>
        <div className="form-group">
            <label for="exerciseType">Exercise Type</label>
            <input type="text" className="form-control text-center" placeholder="Push, Pull, Hip, Knee, or Core" />
        </div>
        {/* You need to create an actual submit button */}
        <button className="btn btn-success">Submit</button>
    </form>
        </div>
        </>
    )
}

export default NewExercisePage; 