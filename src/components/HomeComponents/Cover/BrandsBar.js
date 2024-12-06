import Container from "../../ui/Container";
import classes from "./Cover.module.css";
import img1 from "../../../assets/brand1.png";
import img2 from "../../../assets/brand2.png";
import img3 from "../../../assets/brand3.png";
import img4 from "../../../assets/brand4.png";
import img5 from "../../../assets/brand5.png";

const BrandsBar = () => {
    
  const Brands = [img1, img2, img3, img4, img5];
  return (
    <div className={classes.brandsBar}>
      <Container>
        {Brands.map((img, index) => (
          <img key={index} src={img} alt={`brand${index + 1}`} />
        ))}
      </Container>
    </div>
  );
};
export default BrandsBar;
