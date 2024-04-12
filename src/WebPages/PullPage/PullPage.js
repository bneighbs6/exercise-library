import React from "react";
import PullPageCard from "./PullPageCard";

export default function PullPage() {
  return (
    <>
      <h1>Pull Exercises</h1>
      <div className="row">
        <div className="col">
          <PullPageCard />
        </div>
        <div className="col">
          <PullPageCard />
        </div>
        <div className="col">
          <PullPageCard />
        </div>
        <div className="col">
          <PullPageCard />
        </div>
      </div>
    </>
  );
}
