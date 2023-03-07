import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import Category from "./components/ChoiceCategory/Category";
import TodaysDeal from "./components/TodaysDeal/TodaysDeal";

function App() {
  return (
    <>
      <Carousel />
      <TodaysDeal />
      <Category />
    </>
  );
}

export default App;
