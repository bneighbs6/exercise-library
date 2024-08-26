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
import CreateExercisePage from "../WebPages/CreateExercisePage";
import Footer from "../Components/Footer";

/* 
The Layout function will be the layout for the entire web page
It will include a Header, Navbar, main body (Routes), and a Footer
*/

function Layout() {
  return (
    <>
      <div className="header my-4">
        <Header />
      </div>

      <div className="navigation-bar my-4">
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
        <Route path="/new-exercise" element={<CreateExercisePage />}></Route>
      </Routes>

      <div className="footer my-4">
        <Footer />
      </div>
    </>
  )
}

export default Layout; 