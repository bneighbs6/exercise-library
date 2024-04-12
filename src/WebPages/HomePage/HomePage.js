import React from "react";
import { useNavigate } from "react-router-dom";
import HomePageCard from "./HomePageCards";

/* 
--- START HERE MOTHAFUCKA ---
You need to set up what your home page will look like
*/

function HomePage() {
    const navigate = useNavigate();
    return (
        <>
            <div className="container">
                <div className="row">

                    <div className="col col-sm text-center">
                        <HomePageCard exerciseType={"Push"} exerciseUrl={"push"} />
                        <HomePageCard exerciseType={"Pull"} exerciseUrl={"pull"} />
                    </div>

                    <div className="col col-sm text-center">
                        <HomePageCard exerciseType={"Hip"} exerciseUrl={"hip"} />
                        <HomePageCard exerciseType={"Knee"} exerciseUrl={"knee"} />
                    </div>

                    <div className="row">

                        <div className="col text-center">
                            <HomePageCard exerciseType={"Trunk"} exerciseUrl={"trunk"} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HomePage;