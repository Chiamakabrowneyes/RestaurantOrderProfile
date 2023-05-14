
import { Fragment, useState } from "react";
import HeaderContainer from "./components/Layout/MainHeader.js";
import Meals from "./components/Meals/Orders";
import Order from "/Users/chiamakabrowneyes/tinder-for-food-0230/Chiamaka-Restaurant-Profile/src/components/Cart/Cart.js";
import CartOrderProvider from "./store/cart-provider";

function App() {

  //controls the visibility of the cart
    const [orderIsVisible, setOrderVisibility] = useState(false);

    const showOrderHandler = () => {
      //calls function that references visibility
      setOrderVisibility(true)
    }

    const hideOrderHandler = () => {
      //calls the function that verifies visibility 
      setOrderVisibility(false)
    }

  return (
    //renders the component in the cart order provider object
    <CartOrderProvider>
      {orderIsVisible && <Order onClose= {hideOrderHandler} />}
      <HeaderContainer onShowCart = {showOrderHandler}/>
      <main>
        <Meals/>
      </main>
    </CartOrderProvider>
  );
}

export default App;
