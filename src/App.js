import React from "react";
import { BrowserRouter as Router } from "react-router-dom"
import './App.css';
import Layout from "./Layout/index";

function App() {
  return (
    <div className="app-routes">
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
