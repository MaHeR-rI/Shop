import React, { useState } from "react";
import classes from "./ProductCarouel.module.css";
import img1 from "../../assets/thumb1.png"
import img3 from "../../assets/thumb3.png"
import img4 from "../../assets/thumb4.png"

const ProductCarousel = () => {
  const images = [
    { src: img1 , alt: "Thumbnail 1" },
    { src: img3 , alt: "Thumbnail 3" },
    { src: img4 , alt: "Thumbnail 3" },
  ];

  const [mainImage, setMainImage] = useState(images[0].src);

  return (
    <div className={classes.carousel}>
      <div className={classes.thumbnails}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`${classes.thumbnail} ${mainImage === image.src ? classes.active : ""}`}
            onClick={() => setMainImage(image.src)}
          />
        ))}
      </div>
      <div className={classes.mainImage}>
        <img src={mainImage} alt="Main Display" />
      </div>
    </div>
  );
};

export default ProductCarousel;
