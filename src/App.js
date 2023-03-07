import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import Category from "./components/ChoiceCategory/Category";
import TodaysDeal from "./components/TodaysDeal/TodaysDeal";
import {data} from "./components/constants";
import Services from "./components/Services/Services";
import TopBrands from "./components/TopBrands/TopBrands";
import Recommends from "./components/Recommends/Recommends";

function App() {
  return (
    <>
      <Carousel />
      <TodaysDeal title= "Today's Deals" isEnd="true" deals={data.dailyDeals}/>
      <Category cates={data.cates}/>
      <TodaysDeal title= "Deals of the Month" deals={data.monthlyDeals}/>
      <Services />
      <TopBrands />
      <Recommends />
    </>
  );
}

export default App;
