import Card from "../../ui/Card";
import Container from "../../ui/Container"
import Title from "../../ui/Title";
import classes from "./Arrivals.module.css"

const Arrivals=()=>{
    return(
        <Container>
            <Title>new arrivals</Title>
            <div className={classes.cardsContainer}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </Container>
    )
}
export default Arrivals;