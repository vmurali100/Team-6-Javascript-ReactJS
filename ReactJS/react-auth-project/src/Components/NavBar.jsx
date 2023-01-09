import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./Auth";

const NavBar = () => {
    const auth = useAuth();
    const handleLogout=()=>{
        auth.logout()
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={"/"} className="nav-link ">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"about"} className="nav-link ">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"products"} className="nav-link ">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"profile"} className="nav-link ">
                Profile
              </Link>
            </li>
            {console.log(auth.user)}
            {!auth.user ? <li className="nav-item">
              <Link to={"login"} className="nav-link ">
                Login
              </Link>
            </li>:<li className="nav-item">
              <Link to={"/"} className="nav-link" onClick={handleLogout}>
                Logout
              </Link>
            </li> }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
