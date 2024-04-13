import React from "react";
import KneePageCard from "./KneePageCard";

export default function KneePage() {
  return (
    <>
      <h1>Knee Dominant Exercises</h1>
      <div className="row">
        <div className="col">
            <KneePageCard />
        </div>
        <div className="col">
            <KneePageCard />
        </div>
        <div className="col">
            <KneePageCard />
        </div>
        <div className="col">
            <KneePageCard />
        </div>
      </div>
    </>
  );
}
