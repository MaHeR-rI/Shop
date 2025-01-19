import Container from "../components/ui/Container";
import classes from "../components/ShopView/ShopView.module.css";
import ShopProducts from "../components/ShopView/ShopProducts";
import SideBar from "../components/ShopView/SideBar";
const ShopView = () => {
  return (
    <Container>
      <div className={classes.body}>
        
        <SideBar/>
        <ShopProducts />
      </div>
    </Container>
  );
};
export default ShopView;
