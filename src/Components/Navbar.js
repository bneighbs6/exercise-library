import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="my-4">
        <span className="navbar-logo">Logo</span>
      </div>
      <div className="navbar-item">
        <Link>Home</Link>
      </div>
      <div className="navbar-item">
        <Link>About</Link>
      </div>
      <div className="dropdown">
        <a className="btn btn-info dropdown-toggle">Dropdown List For Exercise Library</a>
        {/* Add list items for dropdown list */}
      </div>
      <div>
        <Link></Link>
      </div>
    </nav>
  )
}

export default Navbar; 