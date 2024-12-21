import React, { useState } from "react";
import { MDBCarousel, MDBCarouselItem, MDBContainer } from "mdb-react-ui-kit";

export default function ProductCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://mdbootstrap.com/img/Photos/Slides/img%20(88).webp",
    "https://mdbootstrap.com/img/Photos/Slides/img%20(121).webp",
    "https://mdbootstrap.com/img/Photos/Slides/img%20(31).webp",
  ];

  // Handle the slide change
  const handleSlide = (newIndex) => {
    setCurrentSlide(newIndex);
  };

  return (
    <MDBContainer className="mt-5">
      <MDBCarousel
        activeItem={currentSlide + 1} // Adjust to MDBCarousel's activeItem format (starts from 1)
        showControls
        showIndicators
        fade
        onSlide={(e) => handleSlide(e.activeIndex - 1)} // Update the slide index
      >
        {images.map((src, index) => (
          <MDBCarouselItem key={index} itemId={index + 1}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="d-block w-100"
            />
          </MDBCarouselItem>
        ))}
      </MDBCarousel>

      <div className="carousel-indicators mt-3">
        {images.map((src, index) => (
          <button
            key={index}
            className={`carousel-indicator ${currentSlide === index ? "active" : ""}`}
            onClick={() => handleSlide(index)}
            style={{ width: "100px" }}
          >
            <img
              className="d-block w-100 img-fluid shadow-1-strong rounded"
              src={src}
              alt={`Thumbnail ${index + 1}`}
            />
          </button>
        ))}
      </div>
    </MDBContainer>
  );
}
