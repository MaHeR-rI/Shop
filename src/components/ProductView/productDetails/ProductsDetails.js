import classes from "./ProductDetails.module.css";
import Reviews from "./Reviews";
import Details from "./Details"
import React, { useState } from "react";
import Container from "../../ui/Container";
import Faqs from "./Faqs";

const ProductDetails = () => {
  const [activeComponent, setActiveComponent] = useState("details");

  const renderComponent = () => {
    switch (activeComponent) {
      case "details":
        return <Details/>;
      case "reviews":
        return <Reviews />;
      case "faqs":
        return <Faqs/>;
      default:
        return <Reviews />;
    }
  };
  return (
    <Container>
      <div className={classes.buttons}>
        <p
          onClick={() => setActiveComponent("details")}
          className={`${activeComponent === "details" ? classes.active : ""}`}>
          Product Details
        </p>
        <p
          onClick={() => setActiveComponent("reviews")}
          className={`${activeComponent === "reviews" ? classes.active : ""}`}>
          Rating & Reviews
        </p>
        <p
          onClick={() => setActiveComponent("faqs")}
          className={`${activeComponent === "faqs" ? classes.active : ""}`}>
          FAQs
        </p>
      </div>
      <div>{renderComponent()}</div>
    </Container>
  );
};
export default ProductDetails;
