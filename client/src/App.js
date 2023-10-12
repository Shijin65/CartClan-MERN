import "./App.css";
import Navbar from "./User/Components/Navbar/Navbar";
import HomePage from "./User/Pages/Home/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
