import {Fragment} from "react";
import mealİmage from "../../images/meals.jpg";
import classes from "./Header.module.css";

const Header = props => {
    return (<Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <button>Cart</button>
        </header>
        <div className={classes.mainImage}>
            <img src={mealİmage} alt={"A table full of delicious food!"}/>
        </div>

        
    </Fragment>
    );
 };

export default Header;