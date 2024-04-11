import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/WebPages/HomePage";
import AboutPage from "../Components/WebPages/AboutPage";
import PushPage from "../Components/WebPages/PushPage";
import PullPage from "../Components/WebPages/PullPage";
import HipPage from "../Components/WebPages/HipPage";
import KneePage from "../Components/WebPages/KneePage";

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
               <Route exact={true} path="/" element={<HomePage />}></Route>
               <Route path="/about" element={<AboutPage />}></Route>
               {/* <Route path="/push-exercises" element={<PushPage />}></Route> */}
               {/* <Route path="/pull-exercises" element={<PullPage />}></Route> */}
               {/* <Route path="/hip-dominant-exercises" element={<HipPage />}></Route> */}
               {/* <Route path="/knee-dominant-exercises" element={<KneePage />}></Route> */}
            </Routes>
        </>
    )
}

export default Layout; 