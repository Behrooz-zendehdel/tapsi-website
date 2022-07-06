import "./App.css";
import Navbar from "./Components/Navbar";
import HeaderPrice from "./Components/HeaderPrice";
import Header from "./Components/Header";
import ServiceCar from "./Components/ServiceCar";
import DetailTapsi from "./Components/DetailTapsi";
import CopunTapsi from "./Components/CopunTapsi";
import TapsiForIran from "./Components/TapsiForIran";
function App() {
  return (
    <div className="container">
      <Navbar />
      <HeaderPrice />
      <Header />
      <ServiceCar />
      <DetailTapsi />
      <CopunTapsi />
      <TapsiForIran />
    </div>
  );
}

export default App;
