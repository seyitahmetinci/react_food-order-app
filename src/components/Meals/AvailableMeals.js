import classes from "./AvailableMeals.module.css";
import CardMeal from "../UI/CardMeal";
import MealItem from "./MealItem/MealItem";
import {useEffect, useState} from "react";

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect( () => {
        const fetchMeals = async () => {
         const response = await fetch('https://react-food-order-app-489aa-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');
         const responseData = await response.json();

         if (!response.ok){
             throw new Error('Something went wrong!')
         } if (httpError){
             return (
                 <section className={classes.MealError}>
                     <p>{httpError}</p>
                 </section>
             )
            }

         const loadedMeals = [];

         for (const key in responseData) {
             loadedMeals.push({
                 id: key,
                 description: responseData[key].description,
                 name: responseData[key].name,
                 price: responseData[key].price
             });
         }

         setMeals(loadedMeals);
         setLoading(false);
        };



            fetchMeals().catch((error) => {
                setLoading(false);
                setHttpError(error.message);
            });
    }, []);

    if (isLoading){
        return (
            <section className={classes.MealsLoading}>
                <p>Loading...</p>
            </section>
        )
    }

    if (httpError){
        return (
            <section className={classes.MealError}>
                <p>{httpError}</p>
            </section>
        )
    }



    const mealsList = meals.map( (meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />));
    // <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>
  return (
    <section className={classes.meals}>
        <CardMeal>
        <ul>{mealsList}</ul>
        </CardMeal>
    </section>
  );
};
export default AvailableMeals;