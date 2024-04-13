import React from "react";
import { Link } from "react-router-dom";

/* 
Navbar will be how user navigates web page
It will have: 
- a logo
- Home button
- About button
- Dropdown list for types of exercises
- Search bar
- More items....
*/

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info-subtle">
      <Link className="navbar-brand mx-1 mx-md-2 mx-lg-5" to="/">Company Logo</Link>
      <Link className="navbar-item mx-1 mx-md-2 mx-lg-5" to="/">Home</Link>
      <Link className="navbar-item mx-1 mx-md-2 mx-lg-5" to="/about">About</Link>
      <div className="dropdown mx-3 mx-md-2 mx-lg-5">
        {/* DEBUG: Dropdown menu does not dropdown when pressed */}
        <button
          onClick={() => console.log("Dropdown Clicked")}
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
      <div className="search-bar ms-auto">
        <form className="d-flex" role="search">
          <input className="form-control mx-1 mx-md-2 mx-lg-5 fixed-width" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar; 