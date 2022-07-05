import { OrbitControls } from "@react-three/drei";
import {
  ARCanvas,
  DefaultXRControllers,
} from "@react-three/xr";
import React, { Suspense, useState } from "react";
import { extend, useFrame, useThree, useLoader } from '@react-three/fiber'
import EyeModel from "../../resources/models/imported/Eye";
import Mesa from "../../resources/models/imported/Mesa";
import MesaAlt from "../../resources/models/imported/Mesa_2";
import ArListener from "../functions/ArListener";
import * as THREE from 'three'
import image from '../../resources/images/360Mesa.0001.jpeg' // relative path to image 
import { useGLTF } from '@react-three/drei'

  
const VRMap = () => {
  const[vr, showVR] = useState([1,1,1]);
  const[ar, showAR] = useState([0,0,0]);
  function Dome() {
    const texture = useLoader(THREE.TextureLoader, image)
    return (
      <mesh>
        <sphereBufferGeometry attach="geometry" args={[1000, 60, 40]} />
        <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
      </mesh>
    )
  };
  
  return (
      <ARCanvas vr="true" camera={{ position: [0, 0, 0] }}>
        <ArListener setVR={showVR} setAR={showAR} />
        <directionalLight color={"#ffffff"} position={[0, 0, 5]} />
        <ambientLight color={"#ffffff"} />
        <directionalLight brightness={2.6} color={"#bdefff"}position={[0, 5, 0]} />
          <group >
            <Suspense>
                <Dome />
                <MesaAlt  position={[12, -14, -3]}  rotation={[0,1.57,0]}/>
            </Suspense>            

          </group>
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
