import React from "react";
import HomePageCard from "./HomePageCards";

/* 
--- START HERE MOTHAFUCKA ---
You need to set up what your home page will look like
*/

function HomePage() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col col-sm text-center">
                    <h2 className="text-center my-auto">Upper Body</h2>
                        <HomePageCard exerciseType={"Push"} exerciseUrl={"push"} />
                        <HomePageCard exerciseType={"Pull"} exerciseUrl={"pull"} />
                    </div>

                    <div className="col col-sm text-center">
                    <h2 className="text-center my-auto">Lower Body</h2>
                        <HomePageCard exerciseType={"Hip"} exerciseUrl={"hip"} />
                        <HomePageCard exerciseType={"Knee"} exerciseUrl={"knee"} />
                    </div>

                    <div className="row mx-auto">
                        <div className="col text-center">
                        <h2 className="text-center my-auto">Trunk/Core</h2>
                            <HomePageCard exerciseType={"Core"} exerciseUrl={"core"} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HomePage;