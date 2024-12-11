import Review from "../ui/Review";
import Container from "../ui/Container";
// import Title from "../ui/Title";
import classes from "./ReviewSection.module.css";
import Carousel from "react-multi-carousel";
import leftArrow from "../../assets/arrow-left.png"
import rightArrow from "../../assets/arrow-right.png"
import "react-multi-carousel/lib/styles.css";

const ReviewSection = () => {
    const CustomLeftArrow = ({ onClick }) => {
        return (
          <button
          className={classes.leftArrow}
            onClick={onClick}
            style={{
              position: "absolute",
              right: "50px",
              top: "10%",
              transform: "translateY(-50%)",
              backgroundColor: "transparent",
              color: "white",
              border: "none",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <img src={leftArrow} alt="left arrow" />
          </button>
        );
      };
      
      // Custom Right Arrow
      const CustomRightArrow = ({ onClick }) => {
        return (
          <button
            onClick={onClick}
            className={classes.rightArrow}
            style={{
              position: "absolute",
              right: "0px",
              top: "10%",
              transform: "translateY(-50%)",
              backgroundColor: "transparent",
              color: "white",
              border: "none",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <img src={rightArrow} alt="right arrow" />
          </button>
        );
      };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
      <h1 className={classes.title}>our happy customers</h1>
        <Carousel responsive={responsive}
        containerClass="react-multi-carousel-list-review"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        transitionDuration={500}
        draggable={false}
        infinite={true}
        arrows={true}
        autoPlay={true}
        swipeable={false}
        autoPlaySpeed={2000}>
          <Review/>
          <Review/>
          <Review/>
          <Review/>
          <Review/>
          <Review/>
        </Carousel>
    </Container>
  );
};
export default ReviewSection;
