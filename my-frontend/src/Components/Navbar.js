import React from "react";
import { Link } from "react-router-dom";
import NavbarDropdownButton from "./NavbarDropdownButton";
import { Nav, Navbar } from "react-bootstrap";

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

function MyNavbar() {
  return (
    <Nav variant="underline" defaultActiveKey={"/"}>
      <Navbar expand="lg" className="bg-light">
        <Link className="navbar-brand mx-1 mx-md-2 mx-lg-5" to="/">
          Company Logo
        </Link>
        <Link className="navbar-item mx-1 mx-md-2 mx-lg-5" to="/">
          Home
        </Link>
        <Link className="navbar-item mx-1 mx-md-2 mx-lg-5" to="/about">
          About
        </Link>
        <Link className="navbar-item mx-1 mx-md-2 mx-lg-5" to="/new-exercise">
          Create New Exercise
        </Link>
        <NavbarDropdownButton />
        <div className="search-bar ms-auto d-none d-sm-block">
          <form className="d-flex" role="search">
            <input
              className="form-control mx-1 mx-md-2 mx-lg-5 fixed-width"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-danger" type="submit">
              Search
            </button>
          </form>
        </div>
      </Navbar>
    </Nav>
  );
}

export default MyNavbar;