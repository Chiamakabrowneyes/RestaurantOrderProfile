import MealItemFormObject from "../Meals/OrderItemSummary.js";
import classes from "/Users/chiamakabrowneyes/tinder-for-food-0230/Chiamaka-Restaurant-Profile/src/components/UI/UI.css"
import React from "react";

//this function forwards a reference into an input 
const Input = React.forwardRef((props, ref) => {
    //renders the items properties
    return (<div className="input">
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref = {ref} {...props.input} />
    </div>
    );
});

//exports the component to be used in other parts of the application
export default Input;
