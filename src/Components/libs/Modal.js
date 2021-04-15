import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalSkillsDetail = (props) => {
    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle}>
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

export default ModalSkillsDetail;



