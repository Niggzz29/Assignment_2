import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Sidebar.css";
import man from "./Profile.svg";

export class Sidebar extends Component {
  render() {
    return (
      <div id="Sidebar" className="sidebar">
        <div className="button">
          <Link smooth to="#">
            {" "}
            <img src={man}></img>
          </Link>
          <Link smooth to="About">
            {" "}
            About{" "}
          </Link>
          <Link smooth to="Experience">
            {" "}
            Experience{" "}
          </Link>
          <Link smooth to="Education">
            {" "}
            Education{" "}
          </Link>
          <Link smooth to="Skills">
            {" "}
            Skills{" "}
          </Link>
          <Link smooth to="Interest">
            {" "}
            Interest{" "}
          </Link>
          <Link smooth to="Awards">
            {" "}
            Awards{" "}
          </Link>
        </div>
      </div>
    );
  }
}

export default Sidebar;