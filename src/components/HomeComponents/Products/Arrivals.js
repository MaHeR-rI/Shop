import Card from "../../ui/Card";
import Container from "../../ui/Container";
import Title from "../../ui/Title";
import classes from "./Arrivals.module.css";
import Data from "../../Data/Data";
import { Link } from "react-router-dom"; // Import useNavigate

const Arrivals = () => {  
  return (
    <Container>
      <Title>new arrivals</Title>
      {Data && (
        <div className={classes.cardsContainer}>
          {Data.slice(0, 4).map((item, index) => (
            <Card data={item} key={index} />
          ))}
        </div>
      )}
      <Link className={classes.button} to={`/shopping/New Arrivals`}>View All</Link>
      <hr />
    </Container>
  );
};
export default Arrivals;
