import classes from '/Users/chiamakabrowneyes/tinder-for-food-0230/Chiamaka-Restaurant-Profile/src/components/Meals/Meals.css';

//Defines the restaurant intro and renders it in html
const RestaurantIntro = () => {
  return (
    <div className="summary">
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </div>
  );
};

//exports the component to be used in other parts of the application
export default RestaurantIntro;