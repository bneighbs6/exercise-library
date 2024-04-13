import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "../WebPages/HomePage/HomePage";
import AboutPage from "../WebPages/AboutPage"
import PushPage from "../WebPages/PushPage/PushPage";
import PullPage from "../WebPages/PullPage/PullPage";
import HipPage from "../WebPages/HipPage/HipPage";
import KneePage from "../WebPages/KneePage/KneePage";
import CorePage from "../WebPages/CorePage/CorePage";

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
        <Route path="/push-exercises" element={<PushPage />}></Route>
        <Route path="/pull-exercises" element={<PullPage />}></Route>
        <Route path="/hip-exercises" element={<HipPage />}></Route>
        <Route path="/knee-exercises" element={<KneePage />}></Route>
        <Route path="/core-exercises" element={<CorePage />}></Route>
      </Routes>
    </>
  )
}

export default Layout; 