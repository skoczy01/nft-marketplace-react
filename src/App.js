import "./App.scss";
import { Nav } from "./components/Navigation/Nav";
import { Header } from "./components/Header/Header";
import { Slider } from "./components/UI/Slider/Slider";
import { MainMarket } from "./components/Main/MainMarket";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Slider />
      <MainMarket />
    </div>
  );
}

export default App;
