import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/HomePage"

function Layout() {
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <Navbar />
            </div>
            <Routes>
               {/* <Route exact={true} path="/" element={<HomePage />}></Route> */}
            </Routes>
        </>
    )
}

export default Layout; 