import Card from "../ui/Card";
import Container from "../ui/Container"
import Title from "../ui/Title";
import classes from "./MightLike.module.css"

const MightLike=()=>{
    return(
        <Container>
            <Title>You might also like</Title>
            <div className={classes.cardsContainer}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </Container>
    )
}
export default MightLike;