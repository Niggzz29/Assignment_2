import React, { useState } from "react";
import axios from "axios";
import "./Skills.css";
import ModalSkillsDetail from "../../Components/libs/Modal.js";

const SkillsComponent = () => {
    const [isOpen, setIsOpen] = useState("");
    const [modalAttribute, setModalAttribute] = useState("");
  
    const listAwards = [
      "HTML 5",
      "Javascript",
      "Node.js",
      "Django",
    ];
    
    const listAwards1 = [
      "CSS3",
      "React",
      "Python",
      "Ember",
    ];
    
    const onChangeModal = (v = "") => {
      axios
        .get("https://5d60ae24c2ca490014b27087.mockapi.io/api/v1/unit")
        .then(({ data }) => {
          if (typeof v === "string") {
            setModalAttribute(data);
          }
          setIsOpen(!isOpen);
        });
    };
  
    return (
      <>
        <ModalSkillsDetail
          toggle={onChangeModal}
          modalAttribute={modalAttribute}
          isOpen={isOpen}
          name={"efefj"}
        >
        </ModalSkillsDetail>
       <button>Skills {modalAttribute.Skills}</button>
       <h1 className="skills">SKILLS</h1>
        <h4 className="programming">PROGRAMMING LANGUAGES & TOOLS</h4>
        
        
        <ul className="list1">
          {listAwards.map((v) => {
            return <li className="list-1" onClick={() => onChangeModal(v)}>{v}</li>;
          })}
        </ul>
        <ul className="list2">
          {listAwards1.map((v) => {
            return <li className="list-2" onClick={() => onChangeModal(v)}>{v}</li>;
          })}
        </ul>
      </>
    );
};
  
class Skills extends React.Component {
  render() {
    console.log(Skills);
    return (
        <SkillsComponent />
      );
    }
  }
  
  export default Skills;