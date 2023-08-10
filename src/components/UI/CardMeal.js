import classes from "./Card.module.css";

const CardMeal = (props) => {
  return(
      <div className={classes.card}>{props.children}</div>
  );
}
export default CardMeal;