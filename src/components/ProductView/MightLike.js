import Card from "../ui/Card";
import Container from "../ui/Container"
import Title from "../ui/Title";
import classes from "./MightLike.module.css"
import Data from "../Data/Data";

const MightLike=()=>{
    return(
        <Container>
            <Title>You might also like</Title>
            {Data && (
        <div className={classes.cardsContainer}>
          {Data.slice(2, 6).map((item, index) => (
            <Card data={item} key={index} />
          ))}
        </div>
      )}
        </Container>
    )
}
export default MightLike;