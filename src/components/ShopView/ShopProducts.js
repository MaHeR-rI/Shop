import classes from "./ShopView.module.css";
import React, { useState } from "react";
import Data from "../Data/Data";
import Card from "../ui/Card";
import arrowRight from "../../assets/arrow-right.png"
import arrowLeft from "../../assets/arrow-left.png"
import ScrollToTop from "../layout/scrollToTop/ScrollToTop";

const ShopProducts = (props) => {

  const data = Data;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Total Pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // Handle Next and Previous
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const [triggerScroll, setTriggerScroll] = useState(false);

  const handleScrollClick = () => {
    setTriggerScroll(true); // Trigger scroll
    setTimeout(() => setTriggerScroll(false), 0); // Reset after triggering
  };
  return (
    <>
    <ScrollToTop triggerScroll={triggerScroll}/>
      <div className="">
        <div className={classes.head}>
          <h2>{props.style}</h2>
          <p>
            Showing 1-10 of 100 Products<p>&#12644;
               Sort by: <span className={classes.filter}> Most Popular</span>
            </p>
          </p>
        </div>
        <div className={classes.pagination}>
          {Data && (
            <div className={classes.cardsContainer}>
              {currentItems.map((item, index) => (
                <Card data={item} key={index} />
              ))}
            </div>
          )}
          <div className={classes.buttons}>
            <span className={classes.prev}
              onClick={() => {handlePrevious();handleScrollClick(); }}
              disabled={currentPage === 1}
              style={{cursor: currentPage === 1 ? "not-allowed" : "pointer",}}>
              <img src={arrowLeft} alt="arrow" /> Previous
            </span>
            <div className={classes.pageNum}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button className={`${page === currentPage ? classes.active : ""}`} key={page} onClick={() => {paginate(page);handleScrollClick(); }}>
                {page}
              </button>
            ))}
            </div>
            <span className={classes.next}
              onClick={() => {handleNext();handleScrollClick(); }}
              disabled={currentPage === totalPages}
              style={{cursor: currentPage === totalPages ? "not-allowed" : "pointer",}}>
              Next <img src={arrowRight} alt="arrow" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShopProducts;
