import React from "react";
import "./Awards.css";

const AwardsComponent = () => {
    const listAwards = [
      "Google Analytics Certified Developer",
      "Mobile Web Specialist - Google Certification",
      "1 st Place - University of Colorado Boulder - Emerging Tech Competition 2009",
      "1 st Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)",
      "2 nd Place - University of Colorado Boulder - Emerging Tech Competition 2008",
      "1 st Place - James Buchanan High School - Hackathon 2006",
      "3 rd Place - James Buchanan High School - Hackhathon 2005",
    ];
  
    return (
      <>
        
            <h1 className="awards-title">AWARDS & CERTIFICATION </h1>
            <ul className="list-awards">
                {listAwards.map((i) => {
                return <li className="awards"> {i} </li>;
            })}
            </ul>
        
        
      </>
    );
  };
  
  class Awards extends React.Component {
    render() {
      console.log(Awards);
      return (
        <div id="Awards">
          <AwardsComponent />
        </div>
      );
    }
  }
  
  export default Awards;