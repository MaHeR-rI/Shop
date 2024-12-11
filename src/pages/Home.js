import BrandsBar from "../components/HomeComponents/Cover/BrandsBar";
import Cover from "../components/HomeComponents/Cover/Cover";
import Arrivals from "../components/HomeComponents/Products/Arrivals";
import Style from "../components/HomeComponents/Products/Style";
import TopSelling from "../components/HomeComponents/Products/TopSelling";
import ReviewSection from "../components/HomeComponents/ReviewSection";

const Home = () => {
  return (
    <>
      <Cover />
      <BrandsBar />
      <Arrivals />
      <TopSelling/>
      <Style/>
      <ReviewSection/>
    </>
  );
};
export default Home;
