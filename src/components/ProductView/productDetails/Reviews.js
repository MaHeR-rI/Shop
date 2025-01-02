import Review from "../../ui/Review";
import arrow from "../../../assets/arrowdown.png";
import classes from "./Reviews.module.css";
import "react-multi-carousel/lib/styles.css";

const Reviews = () => {
  return (
    <>
      <div className={classes.head}>
        <h3 className={classes.title}>All Reviews</h3>
        <p className={classes.buttons}>
          <span>
            Latest <img src={arrow} alt="arrow" />
          </span>
          <span>Write a review</span>
        </p>
      </div>
      <div className={classes.reviewsContainer}>
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
      <p className={classes.load}>
        <span>Load more reviews</span>
      </p>
    </>
  );
};
export default Reviews;
