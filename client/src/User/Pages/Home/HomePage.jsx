import Footer from "../../Components/Footer/Footer";
import HomeCards from "../../Components/HomeCard/HomeCards";
import Homecarousel from "../../Components/Homecarousel/Homecarousel";

const HomePage = () => {
  return (
    <div>
      <Homecarousel />
      <div>
        <HomeCards />
        <HomeCards />
        <HomeCards />
        <HomeCards />
        <HomeCards />
        <HomeCards />
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
