import logo from "./logo.svg";
import "./App.css";
import VRMap from "./component/scenes/VRMap";
import PhotoMap from "./component/scenes/PhotoMap";

function App() {
  return (
    <div className="container3D" style={{ width: "100%", height: "100vh" }}>

      <PhotoMap />
    </div>
  );
}

export default App;
