
import "./App.css";
import Cart from "./User/Components/Cart/Cart";
import Footer from "./User/Components/Footer/Footer";
import Navbar from "./User/Components/Navbar/Navbar";
import ProductDetails from "./User/Components/ProductDetails/ProductDetails";
import Product from "./User/Components/Products/Product";
import HomePage from "./User/Pages/Home/HomePage";
import Login from "./User/Pages/Login/Login";
import Register from "./User/Pages/Register/Register";
import { Routes as Switch,Route } from "react-router-dom";
import Grid from "@mui/material";
function App() {
  return (
    <div className="App m-0  ">
      <Navbar />
      <div className="" >
        <Switch>
        <Route path="/" Component={Cart}/>

          {/* <Route path="/" Component={ProductDetails}/> */}
        {/* <Route path="/" Component={Product}/> */}
        {/* <Route path="/register" Component={Register}/> */}
        {/* <Route path="/product" Component={Product}/> */}
        {/* <Route path="/login" Component={Login}/> */}

        </Switch>
        {/* <HomePage/>
        <Product/>
        <Register/> */}
      </div>

      <Footer/>

      
    </div>
  );
}

export default App;
