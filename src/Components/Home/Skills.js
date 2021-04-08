import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
import { Component } from "react";
import "./Skills.css";

const ModalSkillsDetail = (props) => {
    console.log("props", props);
    return (
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>{props.children}</ModalHeader>
        <ModalBody>{props.name}</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={props.toogle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  };
  
  let SkillsComponent = () => {
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
        <h1 className="skills">SKILLS</h1>
        <h4 className="programming">PROGRAMMING LANGUAGES & TOOLS</h4>
        </ModalSkillsDetail>
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