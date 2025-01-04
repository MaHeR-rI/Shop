import Card from "../../ui/Card";
import Container from "../../ui/Container";
import Title from "../../ui/Title";
import classes from "./Arrivals.module.css";
import Data from "../../Data/Data";

const Arrivals = () => {
  console.log(Data); // Inspect the value
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
      <p className={classes.button}>View All</p>
      <hr />
    </Container>
  );
};
export default Arrivals;
