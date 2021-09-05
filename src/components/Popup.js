import {Modal} from 'react-bootstrap'
import React from 'react'
import './Popup.css'
import ClearIcon from '@material-ui/icons/Clear';

function Popup(props) {
    return (
            <Modal {...props} style={{top:"4%"}}>
                {props.children}
            </Modal>
    )
}

export default Popup
