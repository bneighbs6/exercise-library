import React from "react";
import HipPageCard from "./HipPageCard";

function HipPage() {
  return (
    <>
      <h1>Hip Dominant Exercises</h1>
      <div className="row">
        <div className="col">
          <HipPageCard />
        </div>
        <div className="col">
          <HipPageCard />
        </div>
        <div className="col">
          <HipPageCard />
        </div>
        <div className="col">
          <HipPageCard />
        </div>
      </div>
    </>
  );
}

export default HipPage;
