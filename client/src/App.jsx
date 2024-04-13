import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import user_image from "./assets/user_avatar.png";

function App() {
  return (
    <>
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#">
              Blood Circle
            </a>
          </div>
        </nav>
        {/* Jumbotron */}
        <div className="jumbotron text-center">
          <div className="welcome_text">
            <h1 className="display-4">Find Blood Group Donors</h1>
            <p className="lead">Connect with people willing to donate blood</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search Blood Group"
                    aria-label="Search"
                  />
                  <button className="btn btn-primary" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Donors Section */}
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={user_image} alt="" className="user_image" />
                  <h5 className="card-title">John Doe</h5>
                  <p className="card-text">Blood Group: A+</p>
                  <p className="card-text">Contact: 123-456-7890</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={user_image} alt="" className="user_image" />
                  <h5 className="card-title">Jane Smith</h5>
                  <p className="card-text">Blood Group: O-</p>
                  <p className="card-text">Contact: 987-654-3210</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <img src={user_image} alt="" className="user_image" />
                  <h5 className="card-title">David Johnson</h5>
                  <p className="card-text">Blood Group: B+</p>
                  <p className="card-text">Contact: 567-890-1234</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="text-center footer">
          <div className="container">
            <p>© 2024 Blood Circle</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
