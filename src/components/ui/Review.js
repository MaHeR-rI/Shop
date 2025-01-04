import classes from "./Review.module.css";
import img from "../../assets/certified.png";
import { Rating } from "react-simple-star-rating";

const Review = () => {
  return (
    <div className={classes.Review}>
      <div className={classes.rate}>
        <Rating initialValue={5} readonly={true} size={20}/>
      </div>
      <h4 className={classes.name}>Sara M. <img src={img} alt="product" width="24px"/></h4>
      <div className={classes.content}>
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
      </div>
      <p className={classes.date}>Posted on August 15, 2023</p>
    </div>
  );
};
export default Review;