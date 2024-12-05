import Container from "../../ui/Container";
import classes from "./Cover.module.css";
const Cover = () => {
  return (
    <div className={classes.cover}>
      <Container>
        <div className={classes.coverBody}>
          <div className={classes.coverContent}>
            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
          </div>
          <div></div>
        </div>

        <div className={classes.coverBody}>
          <div className={classes.coverContent}>
            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};
export default Cover;
