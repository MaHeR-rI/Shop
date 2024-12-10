import classes from "./Card.module.css";
import img from "../../assets/product1.png";
import { Rating } from "react-simple-star-rating";

const Card = () => {
  return (
    <div className={classes.card}>
      <img src={img} alt="product" />
      <h4>T-shirt with Tape Details</h4>
      <div className={classes.rate}>
        <Rating initialValue={3.5} readonly={true} size={20}/> <span className={classes.rateValue}>3.5/<span className={classes.black}>5</span></span>
      </div>
      <div className={classes.price}>
        <h3>$300<span className={classes.oldPrice}>$330</span></h3><p className={classes.sale}>30%</p>
      </div>
    </div>
  );
};
export default Card;
