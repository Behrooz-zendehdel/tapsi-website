import "./App.css";
import Navbar from "./Components/Navbar";
import HeaderPrice from "./Components/HeaderPrice";
import Header from "./Components/Header";
import ServiceCar from "./Components/ServiceCar";
function App() {
  return (
    <div className="Container">
      <Navbar />
      <HeaderPrice />
      <Header />
      <ServiceCar />
    </div>
  );
}

export default App;
