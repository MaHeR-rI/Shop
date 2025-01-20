import React, { useState, useRef } from "react";
import classes from "./ToggleDisplay.module.css";
import arrow from "../../assets/arrowdown.png";
import Color from "./Color";

const Colors = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null); // Track the selected color
  const answerRef = useRef(null);

  const toggleFAQ = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={classes.ToggleDisplay}>
      <div className={classes.head} onClick={toggleFAQ}>
        {props.title}
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
        className={`${classes.data} ${
          isOpen ? classes.open : classes.closed
        }`}
      >
        <div className={classes.content} ref={answerRef}>
          {props.data.map((color, index) => (
            <Color
              key={index}
              color={color}
              index={index}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Colors;
