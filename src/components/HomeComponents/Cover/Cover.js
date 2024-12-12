import Container from "../../ui/Container";
import classes from "./Cover.module.css";
const Cover = () => {
  return (
    <div className={classes.cover}>
      <Container>
        <div className={classes.coverBody}>
          <div className={classes.coverContent}>
            <h1 >FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className={classes.subTitle}>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <p className={classes.shopNow}>Shop Now</p>
            <div className={classes.statistics}>
              <div>
                <h2>200+</h2>
                <span>International Brands</span>
              </div>
              <div>
                <h2>2,000+</h2>
                <span>High-Quality Products</span>
              </div>
              <div>
                <h2>30,000</h2>
                <span>Happy Costumers</span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};
export default Cover;
