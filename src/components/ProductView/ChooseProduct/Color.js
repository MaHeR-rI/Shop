import classes from "./Choose.module.css";
import "react-multi-carousel/lib/styles.css";
import React, { useState } from "react";
import img from "../../../assets/selected.png";

const Color = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const colors = ["#4F4631", "#314F4A", "#31344F"];
  return (
    <>
      <p className={classes.subTitle}>Select colors</p>
      <div className={classes.colors}>
        {colors.map((color, index) => (
          <div
            className={classes.colorBox}
            key={index}
            onClick={() => setSelectedIndex(index)} // Set the selected index
            style={{ backgroundColor: color }}
          >
            {selectedIndex === index ? ( // Check if the current index matches the selected one
                <img src={img} alt="selected" />
            ) : (
              <span></span>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Color;
