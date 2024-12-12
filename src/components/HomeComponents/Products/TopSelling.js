import Card from "../../ui/Card";
import Container from "../../ui/Container";
import Title from "../../ui/Title";
import classes from "./Arrivals.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TopSelling = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Container>
      <Title>Top selling</Title>
        <Carousel responsive={responsive}
        transitionDuration={500}
        draggable={false}
        infinite={true}
        arrows={false}
        autoPlay={true}
        swipeable={false}
        autoPlaySpeed={2000}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Carousel>
      <p className={classes.button}>View All</p>
    </Container>
  );
};
export default TopSelling;
