import { Fragment } from "react";
import MealsMenuItems from "./MenuAvailable.js";
import RestaurantIntro from "./RestaurantSummary.js";


//creates a container that renders the restaurant's meal descriptions and the menu
const Meals = () => {
    return (<Fragment>
        <RestaurantIntro/>
        <MealsMenuItems/>
    </Fragment>
    );
};

//exports the components to be used in other parts of the application
export default Meals;