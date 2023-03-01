import Who from "./components/Who";
import Work from "./components/Work";
import Home from "./components/Home";
import Login from "./components/Login";
import './App.css';
import background from "./assets/k.png";
import Test from "./components/Test";
import Gola from "./components/Gola";




function App() {
  return (
    <div
      className="container"
      // style={{
      //   backgroundImage: `url(${background})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      // }}
    >
      <Home />
      <Who />
      <Work />
      <Login />
      <Test />
      <Gola/>
    </div>
  );
}

export default App;
