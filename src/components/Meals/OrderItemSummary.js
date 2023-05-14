import classes from "/Users/chiamakabrowneyes/tinder-for-food-0230/Chiamaka-Restaurant-Profile/src/components/Meals/Meals.css"
import Input from "../UI/InputObject.js";
import {useRef, useState} from "react"

const MealItemFormObject = props => {
    //uses the React useState hook to populate the boolean value for a function
    const [checkAmountValidity, setAmountValidity ] = useState(true);

    //creates an input reference for the value in the order form
    const numInInputRef = useRef()


    const submitHandler = (event) => {
        
        event.preventDefault();

        

        //gets the amount value that the user indicates in the form
        const inputedAmount = numInInputRef.current.value;

        //converts that value to integer format
        const inputedAmountNumber  = +inputedAmount
        //checks if the number indicated is within an acceptable range and updates the amount validity accordingly.
        if (inputedAmount.trim().length === 0 || inputedAmountNumber < 1 || inputedAmountNumber > 5){
            setAmountValidity(false);
            return;
        }
        //update the cart item total
        props.onAddToCart(inputedAmountNumber);
    }
    //renders the item in the menu and defines the constraints per Id
    return (<form className="form" onSubmit = {submitHandler}>
        <Input 
        ref = {numInInputRef}
        label = "Amount" 
        input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1"
        }} />
        <button> + Add</button>
        
        {!checkAmountValidity && <p>Please enter a valid amount (1 - 5).</p>}
    </form>
    );
}
//exports the object to be used in other parts of teh application
export default MealItemFormObject;