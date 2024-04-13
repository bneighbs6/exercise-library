import React from "react";
import PushPageCard from "./PushPageCard";

export default function PushPage() {
  return (
    <>
      <h1 className="text-center">Push Exercises</h1>
      <div className="row">
        <div className="col">
          <PushPageCard />
        </div>
        <div className="col">
          <PushPageCard />
        </div>
        <div className="col">
          <PushPageCard />
        </div>
        <div className="col">
          <PushPageCard />
        </div>
      </div>
    </>
  );
}
