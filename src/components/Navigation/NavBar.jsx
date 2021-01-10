import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="center-navbar">
          <div className="collapse navbar-collapse">
            <a className="navbar-brand" href="/">
              Bringslid Trafikkskole
            </a>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Hjem
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/priser" className="nav-link">
                  Priser
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/priser" className="nav-link">
                  Kjøretøy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
