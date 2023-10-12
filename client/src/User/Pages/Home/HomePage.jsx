import HomeCards from "../../Components/HomeCard/HomeCards";
import Homecarousel from "../../Components/Homecarousel/Homecarousel";

const HomePage = () => {
  return (
    <div>
      <Homecarousel />
      <div><HomeCards/>
      <HomeCards/>
      <HomeCards/>
      <HomeCards/>
      <HomeCards/>
      <HomeCards/>
      </div>
    </div>
  );
};

export default HomePage;
