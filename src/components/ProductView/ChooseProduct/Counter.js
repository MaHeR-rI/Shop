import React, { useState } from "react";
import classes from "./Choose.module.css";

const Counter = () => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1); // Prevent negative values
  };

  return (
    <div className={classes.counterSection}>
    <div className={classes.counter}>
      <button onClick={decrement} disabled={quantity === 0} className={classes.button}>
        -
      </button>
      <span className={classes.display}>{quantity}</span>
      <button onClick={increment} className={classes.button}>
        +
      </button>
    </div>
    <p className={classes.submit}>Add To Cart</p>
    </div>
  );
};

export default Counter;
