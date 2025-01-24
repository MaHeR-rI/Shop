import React, { useState, useRef } from "react";

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import classes from "./Price.module.css";
import arrow from "../../assets/arrowdown.png";

const Price = () => {
  const [isOpen, setIsOpen] = useState(true);
  const answerRef = useRef(null);

  const toggleFAQ = () => {
    setIsOpen((prev) => !prev);
  };
  const [priceRange, setPriceRange] = useState([150, 500]); // Initial min and max values

  const handlePriceChange = (values) => {
    setPriceRange(values); // Update state when slider values change
  };

  return (
    <div className={classes.ToggleDisplay}>
      <div className={classes.head} onClick={toggleFAQ}>
        Price
        <span className={classes.toggle}>
          <img
            className={`${isOpen ? classes.open : classes.closed}`}
            src={arrow}
            alt="arrow"
          />
        </span>
      </div>
      <div
        style={{
          maxHeight: isOpen ? `${answerRef.current?.scrollHeight}px` : "0px",
        }}
        className={`${classes.data} ${isOpen ? classes.open : classes.closed}`}
      >
        <div className={classes.content} ref={answerRef}>
          <RangeSlider
            min={50}
            max={800}
            defaultValue={priceRange}
            onInput={handlePriceChange} // Listen for value changes
            className={classes.customSlider}
          />
          <div className={classes.pricesValue}>
            <span>{priceRange[0]}$</span> <span> - </span>
            <span>{priceRange[1]}$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
