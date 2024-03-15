import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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
          <h1 className="display-4">Find Blood Group Donors</h1>
          <p className="lead">Connect with people willing to donate blood</p>
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <form className="search-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter blood group"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
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
                  <h5 className="card-title">John Doe</h5>
                  <p className="card-text">Blood Group: A+</p>
                  <p className="card-text">Contact: 123-456-7890</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Jane Smith</h5>
                  <p className="card-text">Blood Group: O-</p>
                  <p className="card-text">Contact: 987-654-3210</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
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
