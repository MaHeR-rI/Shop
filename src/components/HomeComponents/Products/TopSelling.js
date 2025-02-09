import Card from "../../ui/Card";
import Container from "../../ui/Container";
import Title from "../../ui/Title";
import classes from "./Arrivals.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Data from "../../Data/Data";
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
      <Carousel
        responsive={responsive}
        transitionDuration={500}
        draggable={false}
        infinite={true}
        arrows={false}
        autoPlay={true}
        swipeable={false}
        autoPlaySpeed={1500}
      >
        {Data && (
            Data.slice(6, 12).map((item, index) => (
              <Card data={item} key={index} />
            ))
        )}
      </Carousel>
      <Link className={classes.button} to={`/shopping/Top Selling`}>View All</Link>
    </Container>
  );
};
export default TopSelling;
