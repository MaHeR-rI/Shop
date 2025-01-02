import classes from "./FaqItem.module.css";
import React, { useState, useRef } from "react";
import arrow from "../../assets/arrowdown.png"

const FaqItem = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef(null);
  const toggleFAQ = () => {
    setIsOpen((prev) => !prev);
  };

  return (
     <div className={classes.faqItem}>
      <div className={classes.faqQuestion} onClick={toggleFAQ}>
        {props.question}
        <span className={classes.faqToggle}><img className={`${isOpen ? classes.open : classes.closed}`} src={arrow} alt="arrow" /></span>
      </div>
      <div style={{
          maxHeight: isOpen ? `${answerRef.current?.scrollHeight}px` : "0px",

        }} className={`${classes.faqAnswer} ${isOpen ? classes.open : classes.closed}`}>
        <p className={classes.content} ref={answerRef}>{props.answer}</p>
      </div>
    </div>
  );
};
export default FaqItem;
