import logo from "./logo.svg";
import "./App.css";
import VRMap from "./component/scenes/VRMap";

function App() {
  return (
    <div className="container3D" style={{ width: "100%", height: "100vh" }}>

      <VRMap />
    </div>
  );
}

export default App;
