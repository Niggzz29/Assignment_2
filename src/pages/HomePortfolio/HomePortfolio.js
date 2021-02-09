import React from "react";
import './HomePortfolio.css'

const AnotherComponent = (props) => {
    console.log("props", props);
    return (
      <>
        <h1>This is Another Component</h1>
        {props.isButtonEnable && <button> Submit </button>}
      </>
    );
};

const AnotherComponent2 = (props) => {
    console.log("props", props);
    return (
      <>
        <h1>This is Another Component 2</h1>
      </>
    );
};

const About = () => {
    return (
        <>
        <h1>LOREM<span class="orange">IPSUM</span></h1>
        <p>+62-0123456789-<span class="orange">LOREMIPSUM@GMAIL.COM</span></p>
        <br /><br />
        <p>I am an opensource contributor and have contributed to Zulip, Hasura, Fossasia, Publiclab and many
        other projects. My tech stacks includes Python and JavaScript. Python for server side and scripting and JavaScript
        for the frontend. I use Django framework for the server side development and React for the frontend development.
        I have also worked with GraphQL. I am a GitHub Campus Expert at my institute where I am responsible for building on campus
        community. I am the lead organiser of Hack In The North Hackathon and the co-founder of Pragma Conference 
        held at IIIT Allahabad.</p>
        <i class="fab fa-linkedin"></i>
        <i class="fab fa-github"></i>
        </>
    )
}

const Experience = () => {
    return (
        <>
        <h1>EXPERIENCE</h1>
        <br /><br />
        
        <h4>GITHUB CAMPUS EXPERT</h4>
        <h5>GITHUB</h5>
        <br />
        <p>Responsible for building the on campus community with the support of GitHub.</p>
        <p class="orange">August 2018 - Present</p>
       
        <br /><br />
        
        <h4>OPENSOURCE DEVELOPER INTERN</h4>
        <h5>FOSSASIA</h5>
        <br />
        <p>Contributing to Fossasia's open event server and frontend as an intern. Resolved numerous bugs and 
            added new features to the everyday platform.</p>
        <p class="orange">June 2019 - Present</p>

        <br /><br />

        <h4>SOFTWARE DEVELOPER INTERN</h4>
        <h5>HASURA</h5>
        <br />
        <p>Worked on Hasura's GraphQL engine and added new features in it.</p>
        <p class="orange">December 2018 - January 2019</p>
        </>
    )
}

const Education = () => {
    return (
        <>
        <h1>EDUCATION</h1>
        <br />
        <h4>LOREMIPSUM INSTITUTE OF INFORMATION TECHNOLOGY</h4>
        <p>BACHELOR OF TECHNOLOGY</p>
        <br />
        <p>12:34</p>
        </>
    )
}

const Skills = () => {
    const listSkills = ["HTML5", "JavaScript", "NodeJS", "Django"];
    const listSkills1 = ["CSS3", "React", "Python", "Ember"];

    return (
        <>
        <h1>SKILLS</h1>
        <br />
        <h4>PROGRAMMING LANGUAGES & TOOLS</h4>
        <ul>
            {listSkills?.map((v, i) => {
                return <li key={i}>{v}</li>
            })}
        </ul>
          <ul>
          {listSkills1?.map((v, i) => {
              return <li key={i}>{v}</li>
          })}
      </ul>
      </>
    )
}

const Interests = () => {
    return (
      <>
        <h1>INTERESTS</h1>
        <br />
        <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, 
        I am an avid skier and novice ice climber. During the warmer months here in Colorado, 
        I enjoy mountain biking, free climbing, and kayaking.</p>
        <br />
        <p>When forced indoors, I follow a number of sci-fi and fantasy game movies and television show, 
        I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology
        advancements in the front-end web development world.</p> 
      </>
    )
}

const Awards = () => {
   const listAwards = [
    "Google Analytics Certified Developer",
    "Mobile Web Specialist - Google Certification",
    "1 st Place - University of Colorado Boulder - Emerging Tech Competition 2009",
    "1 st Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)",
    "2 nd Place - University of Colorado Boulder - Emerging Tech Competition 2008",
    "1 st Place - James Buchanan High School - Hackathon 2006",
    "3 rd Place - James Buchanan High School - Hackhathon 2005"
   ];
    
   return (
       <>
        <h1>AWARDS & CERTIFICATIONS</h1>
        <ul>
            {listAwards?.map((v, i) => {
                return <li key={i}>{v}</li>
            })}
        </ul>
       </>
   )
}
  
class HomePortfolio extends React.Component {
    state = {
        isButtonEnable: false,
    };

    setButtonStatus = () => {
        this.setState({ isButtonEnable: !this.state.isButtonEnable });
    };

    render () {
      return (
        <div>
            <button className="btn btn-primary">test</button>
            {/* <h1 onClick={this.setButtonStatus} >Hai</h1>
           <AnotherComponent2 isButtonEnable = {this.state.isButtonEnable} />
            {this.state.isButtonEnable && <AnotherComponent2 />} */}
            <About />
            <Experience />
            <Education />
            <Skills />
            <Interests />
            <Awards />
        </div>
        );
    }
}

export default HomePortfolio;