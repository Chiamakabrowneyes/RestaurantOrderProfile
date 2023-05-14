import CartItemContext from "/Users/chiamakabrowneyes/tinder-for-food-0230/Chiamaka-Restaurant-Profile/src/store/cart-context.js";
import { useReducer } from "react";

//initializes the deaflut state of the cart
const defaultOrderState = {
    items: [],
    totalAmount: 0
};

//craetes the primary function that enables manipulation of data for each item in the cart
const cartItemReducer = (state, action) => {
    //identifies the actions that must be done when the "add" functionality is requested
    if (action.type === "ADD") {
        //calculates the new price for the items in the cart
        const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        //collects the index of the items that is being updated
        const currentCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

        //retrieves the item itself using the index
        const currentCartItem = state.items[currentCartItemIndex]
       
        //creates a variable the updates items
        let newItems;

        //creates a new state for the item that is currently updated
        if (currentCartItem){
            const newItem = {
                ...currentCartItem,
                amount: currentCartItem.amount + action.item.amount,
            };
            //adds that updated item into a newly created storage set along with other items
            newItems = [...state.items];
            newItems[currentCartItemIndex] = newItem;
        } else {
            //creates a new item component if the requested item does not have a pre-existing occurence
            newItems = state.items.concat(action.item);
        }
        
        

        //returns the updated values rather than the default one.
        return {
            items: newItems,
            totalAmount: newTotalAmount
        };
    } 

    //initiates the behaviour for when a remove operation is requested
    if (action.type === "REMOVE") {
        //gets the items id so that it can be referenced
        const existingCartItemindex = state.items.findIndex(
                (item) => item.id === action.id
            );
            //references the item through its id
            const currentItem = state.items[existingCartItemindex];

            //update the price through deduction
            const updatedTotalAmount = state.totalAmount - currentItem.price;

            let newItems;
            if (currentItem.amount === 1){
                //remove the item value with filer function
                newItems = state.items.filter(item => item.id !== action.id)
            } else {

                const updatedItem = {...currentItem, amount: currentItem.amount - 1};
                newItems = [...state.items];
                newItems[existingCartItemindex] = updatedItem
            }

            //updates the cart order state
            return {
                items: newItems,
                totalAmount: updatedTotalAmount
            }
    }
    //returns the cart order state depending on which operation was done
    return defaultOrderState;
};


//gets the requested action and the target cart state and coordoinates the implemented action 
const CartOrderProvider = (props) => {

    const [orderCartState, dispatchOrderAction] = useReducer(cartItemReducer, defaultOrderState);

    //does the add operation
    const addItemToCardHandler = (item) => {
        dispatchOrderAction({type: "ADD", item: item});
    };

    //does the remove operation
    const removeItemFromCartHandler = (id) => {
        dispatchOrderAction({type: "REMOVE", id: id});
    };


    //creates the cart order context
    const orderContext = {
        items: orderCartState.items,
        totalAmount: orderCartState.totalAmount,
        addItem: addItemToCardHandler, 
        removeItem: removeItemFromCartHandler,
    }
    //returns the card item object for the items
    return <CartItemContext.Provider value = {orderContext}>
        {props.children}
    </CartItemContext.Provider>
};

//exports the component to be used in otherparts of the application.
export default CartOrderProvider;
