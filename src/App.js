import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import TodaysDeal from "./components/TodaysDeal/TodaysDeal";

function App() {
  return (
    <>
      <Carousel />
      <TodaysDeal />
    </>
  );
}

export default App;
