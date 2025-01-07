import Container from "../components/ui/Container";
import classes from "../components/ShopView/ShopView.module.css";
import ShopProducts from "../components/ShopView/ShopProducts";
const ShopView = () => {
  return (
    <Container>
      <div className={classes.body}>
        
        <div className={classes.shops}>2</div>
        <ShopProducts />
      </div>
    </Container>
  );
};
export default ShopView;
