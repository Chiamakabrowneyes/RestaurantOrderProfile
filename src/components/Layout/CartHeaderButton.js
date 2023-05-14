import { useContext, useState } from "react";
import IconCart from "../Cart/IconCart";
import CartItemContext from "/Users/chiamakabrowneyes/tinder-for-food-0230/Chiamaka-Restaurant-Profile/src/store/cart-context.js"
import classes from "/Users/chiamakabrowneyes/tinder-for-food-0230/Chiamaka-Restaurant-Profile/src/components/Layout/Layout.css";

const CartHeaderButton = props => {
    const cartContextVar = useContext(CartItemContext);
    //updates the total number of items in the cart. 
    //the addition is done dynamically depoending on whether the user inputs the form or clicks the add button 

    const numOrderedItems = cartContextVar.items.reduce((curOrderNumber, item) => {
        return curOrderNumber + item.amount;
        //creates a defaults cart number value of 0
    }, 0);

    //Allows us to view the total number of ordered items from the home page
    return (
    <button className="button" onClick = {props.onClick}>
        <span className="icon">
            <IconCart/>
        </span>
        <span>Your Cart</span>
        <span className="badge"> {numOrderedItems}</span>
    </button>
    )
};

//returns the CartHeaders button to be used in other components of the application. 
export default CartHeaderButton;
