import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends Component {
  state = {
    isNavCollapsed: true,
  };

  handleNavCollapse = () => {
    this.setState({ isNavCollapsed: !this.state.isNavCollapsed });
  };

  render() {
    return (
      <div className="navbar-container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded={this.state.isNavCollapsed}
            aria-label="Toggle navigation"
            onClick={this.handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              (this.state.isNavCollapsed ? "collapse " : " ") +
              "navbar-collapse"
            }
            id="navbarToggler"
          >
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
                <Link to="/kjoretoy" className="nav-link">
                  Kjøretøy
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
