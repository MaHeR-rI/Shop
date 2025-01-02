import classes from "./Details.module.css"
import "react-multi-carousel/lib/styles.css";

const Reviews = () => {

  return (
    <>
      <h3 className={classes.title}>Product Details</h3>
      <br/>
      <div className={classes.content}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, similique voluptate repellat quo libero quisquam at voluptatibus deserunt vel sunt neque cum non cumque facere necessitatibus quae laborum accusantium eum?
        <br/><br/>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A velit quisquam rem numquam similique sequi non dolorum ex aut maiores. Provident, repudiandae! Accusamus quisquam corporis et, perspiciatis nostrum architecto magnam!
        <br/><br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius nesciunt blanditiis. Reprehenderit praesentium placeat quibusdam non officiis dolorum alias porro dignissimos animi quaerat, voluptatum eum enim laborum atque? Eius!
      </div>
    </>
  );
};
export default Reviews;
