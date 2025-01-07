import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ triggerScroll }) => {
  const { pathname } = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  // Scroll to top on route changes
  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  // Scroll on external triggers (like button clicks)
  useEffect(() => {
    if (triggerScroll) {
      scrollToTop();
    }
  }, [triggerScroll]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
