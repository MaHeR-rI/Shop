import classes from "./Choose.module.css";
import "react-multi-carousel/lib/styles.css";
import React, { useState } from "react";

const Size = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const sizes = ["Small", "Meduim", "Large", "X-Large"];
  return (
    <>
      <p className={classes.subTitle}>Select colors</p>
      <div className={classes.sizes}>
        {sizes.map((size, index) => (
          <div
            className={`${classes.sizeBox} ${selectedIndex === index ? classes.active : ""}`}
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            {size}
          </div>
        ))}
      </div>
    </>
  );
};

export default Size;
