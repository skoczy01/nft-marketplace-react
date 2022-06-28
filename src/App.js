import "./App.scss";
import { Nav } from "./components/Navigation/Nav";
import { Header } from "./components/Header/Header";
import { Slider } from "./components/UI/Slider/Slider";
import { MainMarket } from "./components/Main/MainMarket";
import { Offert } from "./components/Offert/Offert";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Slider />
      <MainMarket />
      <Offert />
    </div>
  );
}

export default App;
