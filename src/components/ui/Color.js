import React from "react";
import classes from "./ToggleDisplay.module.css";
import img from "../../assets/selected.png";

const Color = ({ color, index, selectedIndex, setSelectedIndex }) => {
  return (
    <div
      className={classes.colorBox}
      onClick={() => setSelectedIndex(index)} // Update the selected index in the parent
      style={{ backgroundColor: color }}
    >
      {/* Show image only if this box is the selected one */}
      {selectedIndex === index && <img src={img} alt="selected" />}
    </div>
  );
};

export default Color;
