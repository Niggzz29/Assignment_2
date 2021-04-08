import React, { Component } from "react";
import About from "../../Components/Home/About";
import Experience from "../../Components/Home/Experience";
import Education from "../../Components/Home/Education";
import Interest from "../../Components/Home/Interest";
import Skills from "../../Components/Home/Skills";
import Awards from "../../Components/Home/Awards";
import "./HomeIndex.css";

class Main extends Component {
  render() {
    return (
      <div className="left-sidebar">
        <div className="row pb-5">
            <About />
            <Experience />
            <Education />
            <Skills />
            <Interest />
            <Awards />
        </div>
       </div>
    );
  }
}

export default Main;