import classes from "./Cart.module.css";
const Cart = (props) => {
    const cartItems =(<ul className={classes.cartItems}>
        {[{id:'c1', name:'Sushi', amount:2, price: 12.99}].map((item) => (
        <li>{item.name}</li>
    ))}
    </ul>);

  return(
      <div>
          {cartItems}
          <div>
              <span>Total Amount</span>
          </div>
          <div></div>
      </div>
  );
}
export default Cart;