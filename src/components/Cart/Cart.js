import Modal  from "../UI/ModalObject.js";
import classes from "/Users/chiamakabrowneyes/tinder-for-food-0230/Chiamaka-Restaurant-Profile/src/components/Cart/Cart.css"
import { useContext } from "react";
import CartItemContext from "../../store/cart-context";
import OrderItem from "/Users/chiamakabrowneyes/tinder-for-food-0230/Chiamaka-Restaurant-Profile/src/components/Cart/OrderItem.js";


const Order = (props) => {

    const cartContextVar = useContext(CartItemContext);

    //Checks if there is items in the cart
    const hasItems = cartContextVar.items.length > 0;

    //Identifies the total cost of items in the cart and returns the value to 2 decimal places
    const totalCartAmount = `$${cartContextVar.totalAmount.toFixed(2)}`;


    //pulls the item that is clicked and initiates its addition to the order cart
    const orderItemAddHandler = (item) => {
        cartContextVar.addItem({...item, amount: 1});
    };

    //Identifies the item that is clicked and initiates its removal from the cart
    const orderItemRemoveHandler = (id) => {
        cartContextVar.removeItem(id);
    };

    //Retrieves the item object and creates variables that allows its components to be used in other functions
    const orderItems = <ul className="cart-items">{
        cartContextVar.items.map((item) => (
        <OrderItem 
        key={item.id} 
        name = {item.name} 
        amount = {item.amount} 
        price = {item.price} 
        onRemove = {orderItemRemoveHandler.bind(null, item.id)} 
        onAdd = {orderItemAddHandler.bind(null, item)} 
        />
        ))}
        </ul>


        //Renders dynamic price on an order template
        return <Modal onClose= {props.onClose}>
            {orderItems}
        <div className="total">
            <span>Total Cost</span>
            <span>{totalCartAmount}</span>
        </div>
        <div className="actions">
            <button className="button--alt" onClick= {props.onClose} >Close</button>
            {hasItems && <button className="button"> Place Order</button>}
        </div>
        </Modal>
  
}

export default Order;