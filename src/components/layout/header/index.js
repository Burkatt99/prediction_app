import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="menu">
        <div className="title">
          <h2>Prediction App</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link className="link" to="/">
                Predict
              </Link>
            </li>
            <li>
              <Link className="link" to="/history">
                History
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
