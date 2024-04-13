import React from "react";
import CorePageCard from "./CorePageCard"
function CorePage() {
    return (
        <>
        <h1>Core Exercises</h1>
        <div className="row">
            <div className="col">
                <CorePageCard />
            </div>
            <div className="col">
                <CorePageCard />
            </div>
            <div className="col">
                <CorePageCard />
            </div>
            <div className="col">
                <CorePageCard />
            </div>
        </div>
        </>
    )
}

export default CorePage;