import { OrbitControls } from "@react-three/drei";
import {
  ARCanvas,
  DefaultXRControllers,
  useXR,
  XRButton,
} from "@react-three/xr";

import React, { Suspense, useEffect, useState } from "react";
import { extend, useFrame, useThree, useLoader, Canvas } from '@react-three/fiber'
import EyeModel from "../../resources/models/imported/Eye";
import Mesa from "../../resources/models/imported/Mesa";
import MesaAlt from "../../resources/models/imported/Mesa_2";
import ArListener from "../functions/ArListener";
import * as THREE from 'three'
import image from '../../resources/images/360Mesa.0001.jpeg' // relative path to image 
import { useGLTF } from '@react-three/drei'

  
const PhotoMap = () => {

  const[vr, showVR] = useState([1,1,1]);
  const[ar, showAR] = useState([0,0,0]);

  //Starts AR on click
  const startAR = ()=>{
    let button = document.getElementById("ARButton");
    button.click();
  }

  //Create 360 Dome
  function Dome() {
    const texture = useLoader(THREE.TextureLoader, image)
    return (
      <mesh>
        <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
        <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
      </mesh>
    )
  };

  return (
    
      <Canvas vr="true" camera={{ position: [0, 0, 0] }}>
        <XRButton mode="AR"  />
        <XRButton mode="VR"  />
        <ArListener setVR={showVR} setAR={showAR} />
        <directionalLight color={"#ffffff"} position={[0, 0, 5]} />
        <ambientLight color={"#ffffff"} />
        <directionalLight brightness={2.6} color={"#bdefff"}position={[0, 5, 0]} />
          <group  scale={vr} >
            <Suspense>
                <Dome />
                <MesaAlt  position={[12, -14, -3]}  rotation={[0,1.57,0]}  onClick={startAR}/>
            </Suspense>            
          </group>
        <group position={[1, 0.2, 0]} scale={ar}>
          <Suspense fallback={null}>
            <EyeModel  rotation={[0, 1.57, 1.57]} />
          </Suspense>
        </group>
        <OrbitControls target={[0, 0, -0.3]} />
        <axesHelper />
      </Canvas>
  );
};

export default PhotoMap;
