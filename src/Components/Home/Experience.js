import React, { Component } from "react";
import moment from "moment";
import "./Experience.css";

class Experience extends Component {
    render() {
        return (
            <div class="container">
                <div class="row col-12">
                    <h1 class="experience">EXPERIENCE</h1>
                </div>
                <div class="row">
                    <div class="col-9 pl-1">
                        <h3 class="github-1">GITHUB CAMPUS EXPERT</h3>
                        <h5 class="gray">GITHUB</h5>
                    </div>
                    <div class="col-3 pl-4 orange">
                        {moment("Tuesday, 9 February 2016").format("MMMM YYYY")} - August 2020
                    </div>
                </div>
                <div class="row">
                    <p class="text">Responsible for building the on campus community with the support of GitHub.</p>
                </div>
                <div class="row">
                    <div class="col-9 pl-1">
                        <h3 class="opensource">OPENSOURCE DEVELOPER INTERN</h3>
                        <h5 class="gray">FOSSASIA</h5>
                    </div>
                    <div class="col-3 pl-4 orange-1">
                        {moment("Tuesday, 9 February 2017").format("MMMM YYYY")} - March 2020
                    </div>
                </div>
                <div class="row">
                    <p class="text">
                    Contributing to Fossasia's open event server and frontend as an intern. <br />
                    Resolved numerous bugs and added new features to the everyday platform.</p>
                </div>
                <div class="row">
                    <div class="col-9 pl-1">
                        <h3 class="software">SOFTWARE DEVELOPER INTERN</h3>
                        <h5 class="gray">HASURA</h5>
                    </div>
                    <div class="col-3 pl-4 orange-2">
                    {moment("Tuesday, 9 February 2015").format("MMMM YYYY")} - March 2020
                    </div>
                </div>
                <div class="row">
                    <p class="text">Worked on Hasura's GraphQL engine and added new features in it.</p>
                </div>
            </div>
        );
      }
    }

export default Experience;