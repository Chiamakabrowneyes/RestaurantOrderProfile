import classes from "/Users/chiamakabrowneyes/tinder-for-food-0230/Chiamaka-Restaurant-Profile/src/components/Meals/Meals.css"
import MealItemFormObject from "./OrderItemSummary.js"
import {useContext} from "react";
import CartItemContext from "../../store/cart-context";

const MealItemContainer = props => {
    //uses the recat hook to access the CartContext object
    const cartContextVar = useContext(CartItemContext);

    //gets the price and returns it to the 2dp convention.
    const price =   `$${props.price.toFixed(2)}`

    //retrieves the different components of item in a dictionary
    const cartAdderDict = amount => {
        cartContextVar.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        })
    };

    //Renders the item in the menu's container
    return <li className= "meal">
        <div>
            <h3 >{props.name}</h3>
            <div className= "description">{props.description}</div>
            <div className= "price">{price}</div>
            </div>
        <div>
            <MealItemFormObject id={props.id} onAddToCart = {cartAdderDict}/>
        </div>
    </li>
}

//returns the Meal Item container to be used in other parts of the application.
export default MealItemContainer;