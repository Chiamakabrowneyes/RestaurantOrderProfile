import classes from "/Users/chiamakabrowneyes/tinder-for-food-0230/Chiamaka-Restaurant-Profile/src/components/UI/UI.css"

//renders the card object in html
const Card = props => {
    return (
    <div className= "card"> 
    {props.children}
    </div>
    )
};

//exports this component to be used in other parts of the application
export default Card;