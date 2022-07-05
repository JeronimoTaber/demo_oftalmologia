import { OrbitControls } from "@react-three/drei";
import {
  ARCanvas,
  VRCanvas,
  XRButton,
  
  DefaultXRControllers,
} from "@react-three/xr";
import React, { Suspense, useState } from "react";
import EyeModel from "../../resources/models/imported/Eye";
import ScenarioModelFull from "../../resources/models/imported/EscenarioTestThreeFiber_FULL";
import Streaming from "../../resources/models/Streaming";
import GetInfo from "./GetInfo";

const VRMap = () => {
  const[vr, showVR] = useState([1,1,1])
  const[ar, showAR] = useState([0,0,0])
  return (
      <ARCanvas vr="true" camera={{ position: [0, 0, 0] }}>
        <GetInfo setVR={showVR} setAR={showAR} />
        <ambientLight color={"#ffffff"} />
        <Suspense fallback={null}>
          <group position={[-6, -1.8, -11]} scale={vr}>
            <ScenarioModelFull />
            <Streaming />
          </group>
        </Suspense>
        <group position={[1, 0.2, 0]} scale={ar}>
          <Suspense fallback={null}>
            <EyeModel  rotation={[0, -180, 180]} />
          </Suspense>
        </group>
        <DefaultXRControllers />
        <OrbitControls target={[0, 0, -0.3]} />
        <axesHelper />
      </ARCanvas>
  );
};

export default VRMap;
