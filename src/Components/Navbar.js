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

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info-subtle">
      <Link className="navbar-brand" to="/">Company Logo</Link>
      <Link className="navbar-item" to="/">Home</Link>
      <Link className="navbar-item" to="/about">About</Link>
      <div className="dropdown">
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
      <div className="search-bar">
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}