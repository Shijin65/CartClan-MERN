
import "./App.css";
import Footer from "./User/Components/Footer/Footer";
import Navbar from "./User/Components/Navbar/Navbar";
import Product from "./User/Components/Products/Product";
import HomePage from "./User/Pages/Home/HomePage";
import Login from "./User/Pages/Login/Login";
import Register from "./User/Pages/Register/Register";
import { Routes as Switch,Route } from "react-router-dom";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <div >
        <Switch>
        <Route path="/" Component={HomePage}/>
        <Route path="/register" Component={Register}/>
        <Route path="/product" Component={Product}/>
        <Route path="/login" Component={Login}/>

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
