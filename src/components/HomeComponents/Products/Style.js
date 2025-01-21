import Container from "../../ui/Container";
import Title from "../../ui/Title";
import classes from "./Style.module.css";
import style1 from "../../../assets/style1.png";
import style2 from "../../../assets/style2.png";
import style3 from "../../../assets/style3.png";
import style4 from "../../../assets/style4.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Style = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Container>
      <div className={classes.StyleContainer}>
        <Title>BROWSE BY dress STYLE</Title>
        <div className={classes.gridSection}>
          <img src={style1} alt="style1" onClick={()=>{navigate('../shopping/Casual')}}/>
          <img src={style2} alt="style2" onClick={()=>{navigate('../shopping/Formal')}}/></div>
          <div className={classes.gridSection2}>
          <img src={style3} alt="style3" onClick={()=>{navigate('../shopping/Party')}}/>
          <img src={style4} alt="style4" onClick={()=>{navigate('../shopping/Gym')}}/>
        </div>
      </div>
    </Container>
  );
};
export default Style;
