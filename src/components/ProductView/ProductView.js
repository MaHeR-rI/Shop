import Container from "../ui/Container";
import Color from "./ChooseProduct/Color";
import Size from "./ChooseProduct/Size";
import ProductCarousel from "./ProductCarousel";
import classes from "./ProductView.module.css";
import { Rating } from "react-simple-star-rating";
// import ImageGallery from "react-image-gallery";

const ProductView = () => {
  return (
    <Container>
      <div className={classes.gridView}>
        <div>
          <ProductCarousel />
        </div>
        <div className={classes.ProductInfo}>
          <div className={classes.card}>
            <h2 className={classes.productName}>T-shirt with Tape Details</h2>
            <div className={classes.rate}>
              <Rating initialValue={3.5} readonly={true} size={20} />{" "}
              <span className={classes.rateValue}>
                3.5/<span className={classes.black}>5</span>
              </span>
            </div>
            <div className={classes.price}>
              <p className={classes.productPrice}>
                $300<span className={classes.oldPrice}>$330</span>
                <span className={classes.sale}>30%</span>
              </p>
              <p>
                This graphic t-shirt which is perfect for any occasion. Crafted
                from a soft and breathable fabric, it offers superior comfort
                and style.
              </p>
            </div>
          </div>
          <Color/>
          <Size/>
        </div>
      </div>
    </Container>
  );
};
export default ProductView;
