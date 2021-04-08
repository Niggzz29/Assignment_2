import React, { Component } from "react";
import "./About.css";

class About extends Component {
    render() {
        return (
      
            <div className="section" id="About">
                <h1 className="lorem">LOREM<span className="orange">IPSUM</span></h1>
                <p className="number">+62-0123456789-<span class="orange">LOREMIPSUM@GMAIL.COM</span></p>
                <br /><br />
                <p className="about"> I am an opensource contributor and have contributed to Zulip, Hasura, Fossasia, Publiclab and many other projects. 
                My tech stacks includes Python<br /> and JavaScript. Python for server side and scripting and JavaScript for the frontend. 
                I use Django framework for the server side development and <br /> React for the frontend development. I have also worked with GraphQL. 
                I am a GitHub Campus Expert at my institute where I am responsible for <br /> building on campus community. 
                I am the lead organiser of Hack In The North Hackathon and the co-founder of Pragma Conference held at IIIT Allahabad.</p>
                <i className="fab fa-linkedin linkedin"></i>
                <i className="fab fa-github github"></i>
            </div>
        );
    }
}

export default About;