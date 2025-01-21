import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/footerSetion/Footer";
import Navbar from "./components/layout/navbarSection/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ScrollToTop from "./components/layout/scrollToTop/ScrollToTop";
import ShopView from "./pages/ShopView";

function App() {
  // const style = params.get("style");
  return (
    <Router basename="/shop">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/shopping/:style" element={<ShopView />} />
        <Route path="/Brands" element={<div>brands</div>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
