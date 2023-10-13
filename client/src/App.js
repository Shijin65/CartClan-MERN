import "./App.css";
import Footer from "./User/Components/Footer/Footer";
import Navbar from "./User/Components/Navbar/Navbar";
import Product from "./User/Components/Products/Product";
import HomePage from "./User/Pages/Home/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        {/* <HomePage /> */}
        <Product/>
      </div>

      <Footer/>

      
    </div>
  );
}

export default App;
