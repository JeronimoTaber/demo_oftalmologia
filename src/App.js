import logo from "./logo.svg";
import "./App.css";
import VRMap from "./component/scenes/VRMap";
import GetInfo from "./component/scenes/GetInfo";

function App() {
  return (
    <div className="container3D" style={{ width: "100%", height: "100vh" }}>

      <VRMap />
    </div>
  );
}

export default App;
