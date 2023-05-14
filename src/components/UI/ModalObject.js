import classes from "/Users/chiamakabrowneyes/tinder-for-food-0230/Chiamaka-Restaurant-Profile/src/components/UI/UI.css"
import { Fragment } from "react";
import ReactDOM from "react-dom";


//initializes the page property that adds a background shadow when another dialogue box is on screen
const Backdrop = props => {
    //indicates what activates the backdrop
    return <div className = "backdrop" onClick={props.onClose}/>
}

//craetes the modal overlay property
const ModalOverlay = props => {
    return <div className="modal">
        <div className="content"> {props.children}</div>
    </div>
}

//references the overlay component from the index.js file
const portalBgElement = document.getElementById("overlays");

const Modal = props => {
    //renders the properties on the main page
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalBgElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalBgElement)}
    </Fragment>
};

//exports the components to be used in other parts of the application
export default Modal;