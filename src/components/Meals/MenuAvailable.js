
import classes from "/Users/chiamakabrowneyes/tinder-for-food-0230/Chiamaka-Restaurant-Profile/src/components/Meals/Meals.css";
import Card from "../UI/CardObject.js";
import MealItemContainer from "./OrderItem.js"

//creates a dictionary database for holding the restaurant's menu items
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Yanyeom Chicken',
      description: 'Greasy battered sweat-sour chuicken',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Slop bun',
      description: 'Avocodas and barbequed bacon with hamburgers',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Cheese pasta',
      description: 'A heaven of permasian italian pasta',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Sootie cream',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];


//Iterates over the menu dictionary and creates a meal container object 
const MealsMenuItems = () => {
    const mealOrderList = DUMMY_MEALS.map((meal) => (<MealItemContainer 
    key= {meal.id} 
    id = {meal.id}
    name = {meal.name} 
    description = {meal.description} 
    price = {meal.price}
    
    /> ));

    //renders the meal container object on the home page
    return <section className = "meals">
        
            <Card>
              <ul>
              {mealOrderList}
              </ul>
            </Card>
            
        
    </section>
};

//exports the component to be used in other parts of the application.
export default MealsMenuItems;