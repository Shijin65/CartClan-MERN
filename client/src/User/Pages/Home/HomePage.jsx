import HomeCards from "../../Components/HomeCard/HomeCards";
import Homecarousel from "../../Components/Homecarousel/Homecarousel";

const item = [1,1,1,1,1,1,1,1,1,1,1,1,]
const HomePage = () => {
  return (
    <div>
      <Homecarousel />
      <div>
      <HomeCards/>
      <HomeCards/>
      <HomeCards/>
        {/* {item.map((Item)=><HomeCards/>)} */}
      </div>
      
    </div>
  );
};

export default HomePage;
