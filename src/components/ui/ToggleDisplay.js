import classes from "./ToggleDisplay.module.css";
import React, { useState, useRef } from "react";
import arrow from "../../assets/arrowdown.png";

const ToggleDisplay = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const answerRef = useRef(null);

  const toggleFAQ = () => {
    setIsOpen((prev) => !prev);
  };

  console.log("props.data:", props.data); // Debugging: Inspect the value of props.data

  return (
    <div className={classes.ToggleDisplay}>
      <div className={classes.head} onClick={toggleFAQ}>
        {props.title}
        <span className={classes.faqToggle}>
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
        className={`${classes.faqAnswer} ${
          isOpen ? classes.open : classes.closed
        }`}
      >
        <p className={classes.content} ref={answerRef}>
          {props.data.map((filter, index) => (
            <span key={index}>{filter}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ToggleDisplay;
