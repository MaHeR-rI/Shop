import "./App.css";
import Footer from "./components/layout/footerSetion/Footer";
import Navbar from "./components/layout/navbarSection/Navbar";
// import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Product/>
      <Footer />
    </div>
  );
}

export default App;
