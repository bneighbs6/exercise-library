import React from "react";
import { Link } from "react-router-dom";

/* 
Navbar will be how user navigates web page
It will have: 
- a logo
- Home button
- About button
- Dropdown list for types of exercises
- More items....
*/

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info-subtle">
      <a className="navbar-brand" href="#">Company Logo</a>
      <a className="navbar-item" href="#">Home</a>
      <a className="navbar-item" href="#">About</a>
      <div className="dropdown">
        {/* DEBUG: Dropdown menu does not dropdown when pressed */}
        <div className="btn-group navbar-collapse">
          <button
            className="btn btn-dark dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            Exercise Library
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li className="dropdown-item">Push Exercises</li>
            <li className="dropdown-item">Pull Exercises</li>
            <li className="dropdown-item">Hip Dominant Exercises</li>
            <li className="dropdown-item">Knee Dominant Exercises</li>
            <li className="dropdown-item">Trunk Exercises</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar; 