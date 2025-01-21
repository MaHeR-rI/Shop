import Container from "../components/ui/Container";
import classes from "../components/ShopView/ShopView.module.css";
import ShopProducts from "../components/ShopView/ShopProducts";
import SideBar from "../components/ShopView/SideBar";
import { useParams } from "react-router-dom";

const ShopView = () => {
  const { style } = useParams();
  return (
    <Container>
      <div className={classes.body}>
        <SideBar/>
        <ShopProducts style={style}/>
      </div>
    </Container>
  );
};
export default ShopView;
