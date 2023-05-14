
import React from "react";

//initializes the Cart item's context that identifies the relevant variables and functions that each item must have
const CartItemContext = React.createContext({
    //template creation
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

//exports the component to be used in other parts of the application
export default CartItemContext