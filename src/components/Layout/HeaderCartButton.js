import classes from "./HeaderCartButton.module.css";
import CartIcon from "../UI/CartIcon";

const HeaderCartButton = (props) => {

    return(
        <button className={classes.button}>
                <span className={classes.icon}> <CartIcon /></span>
                <span> Your Card </span>
                <span className={classes.badge}>3</span>
        </button>
    );
}
export default HeaderCartButton;