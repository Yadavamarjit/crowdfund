import React from 'react';
import {Modal} from 'react-bootstrap'

const Model = (props) => {
    return (
        <Modal {...props} show={props.show} >
            {props.children}
        </Modal>
    );
}

export default Model;
