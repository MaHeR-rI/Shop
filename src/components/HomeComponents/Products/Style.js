import Container from "../../ui/Container";
import Title from "../../ui/Title";
import classes from "./Style.module.css";
import style1 from "../../../assets/style1.png";
import style2 from "../../../assets/style2.png";
import style3 from "../../../assets/style3.png";
import style4 from "../../../assets/style4.png";

const Style = () => {
  return (
    <Container>
      <div className={classes.StyleContainer}>
        <Title>BROWSE BY dress STYLE</Title>
        <div className={classes.flexSection}>
          <img src={style1} alt="style1" />
          <img src={style2} alt="style2" />
          <img src={style3} alt="style3" />
          <img src={style4} alt="style4" />
        </div>
      </div>
    </Container>
  );
};
export default Style;
