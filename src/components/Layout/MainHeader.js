import { Fragment, React } from "react";
import mealHeaderImg from "/Users/chiamakabrowneyes/tinder-for-food-0230/Chiamaka-Restaurant-Profile/src/assets/oysters.avif";
import classes from "/Users/chiamakabrowneyes/tinder-for-food-0230/Chiamaka-Restaurant-Profile/src/components/Layout/Layout.css";
import CartHeaderButton from "./CartHeaderButton";

//initializes the header subcomponents to be rendered on the main page

const HeaderContainer = props => {
    //uses Fragment as an overheaded container that holds the button, image and restaurant name. 
    //uses the previously defined cart header button as an object in the header
    return <Fragment>
        <header className= "header">
            <h1>Cilinisie Kitchen</h1>
            <CartHeaderButton onClick = {props.onShowCart}/>
        </header>
        <div className="main-image">
            <img src= {mealHeaderImg} alt = " A Table with Food"/>
        </div>
    </Fragment>
};

//returns the Header to be used in other components in the application
export default HeaderContainer;