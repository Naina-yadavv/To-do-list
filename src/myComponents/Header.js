import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        <a className="navbar-brand" href="/">
          {props.title}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          {/* LEFT SIDE LINKS */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
          </ul>

          {/* 🔍 SEARCH BAR */}
          <form className="d-flex me-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          {/* 👤 USER DISPLAY */}
          {props.user && (
            <span className="navbar-text">
              Welcome, <b>{props.user.firstName}</b>
            </span>
          )}

        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  title: "Your title here",
  searchBar: true
};

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool,
  user: PropTypes.object
};