import React, { Component } from "react";
import "./Interest.css";

class Interest extends Component {
    render() {
        return (
            <div id="Interest">
                <h1 class="interest">Interest</h1>
                <div class="row">
                    <p class="apart">Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the <br /> 
                    warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
                </div>
                <div class="row">
                    <p class="when">When forced indoors, I follow a number of sci-fi and fantasy game movies and television show, 
                    I am an aspiring chef, and I spend a large amount of <br /> my free time exploring the latest technology advancements 
                    in the front-end web development world.</p>
                </div>
            </div>
        );
      }
    }

export default Interest;