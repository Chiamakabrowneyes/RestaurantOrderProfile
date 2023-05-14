import classes from '/Users/chiamakabrowneyes/tinder-for-food-0230/Chiamaka-Restaurant-Profile/src/components/Cart/Cart.css';

const OrderItem = (props) => {
  //creates a variable that for the price of the item
  const cost = `$${props.price.toFixed(2)}`;

  //creates a container for the added item in the cart.
  return (
    //adds the remove and add functions to the buttons that activates when clicks are made. 
    <li className='cart-item'>
      <div> 
        <h2>{props.name}</h2>
        <div >
          <span className= "price">{cost}</span>
          <span className= "amount">x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

//returns the Ordered item to be used in other components of the application
export default OrderItem;
