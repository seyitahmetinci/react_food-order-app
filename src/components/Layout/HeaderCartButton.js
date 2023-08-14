import classes from "./HeaderCartButton.module.css";
import CartIcon from "../UI/CartIcon";
import {useContext} from "react";
import CartContext from "../../store/card-context";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber,item) => {
        return curNumber + item.amount;
    },0);

    return(
        <button className={classes.button} onClick={props.onClick}>
                <span className={classes.icon}> <CartIcon /></span>
                <span> Your Card </span>
                <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
}
export default HeaderCartButton;