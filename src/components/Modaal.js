import { Button,Modal,Card,Navbar,Nav,NavDropdown,Container } from "react-bootstrap";
import {useState,React} from 'react';

const modalStyle={
    top:'17%'
}
const closeButton={
    width:'80px'
}
const Modaal = (props) => {
    const [showModal,setModal]=useState(false)
    return (
            <Modal centered closeButton show={true}>
              {props.children}
            </Modal>
    );
}

export default Modaal;
