import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Layout from "./Layout/index";

function App() {
  return (
    <div className="app-routes">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
