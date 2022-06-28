import "./App.scss";
import { Nav } from "./components/Navigation/Nav";
import { Header } from "./components/Header/Header";
import { Slider } from "./components/UI/Slider/Slider";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Slider />
    </div>
  );
}

export default App;
