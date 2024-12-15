import "./App.css";
import Footer from "./components/layout/footerSetion/Footer";
import Navbar from "./components/layout/navbarSection/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
