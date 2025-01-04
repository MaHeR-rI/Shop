import classes from "./Card.module.css";
import { Rating } from "react-simple-star-rating";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  const handleDivClick = () => {
    navigate("/Product"); // Navigate to the Counter page
  };

  return (
    <div className={classes.card} onClick={handleDivClick}>
      {/* Conditional rendering for props.data */}
      {props.data && (
        <>
          <img src={props.data.img} alt={props.data.title} />
          <p className={classes.productName}>{props.data.title}</p>
          <div className={classes.rate}>
            <Rating initialValue={props.data.rate} readonly={true} size={20} />
            <span className={classes.rateValue}>
              {props.data.rate} /<span className={classes.black}> 5</span>
            </span>
          </div>
          <div className={classes.price}>
            <p className={classes.productPrice}>
              ${props.data.price}
              <span className={classes.oldPrice}>{props.data.price}</span>
            </p>
            <p className={classes.sale}>-{props.data.disc}%</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
