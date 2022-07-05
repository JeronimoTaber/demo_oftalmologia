import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import url from "../../resources/videos/test.mp4";

const Streaming = () => {
  
    const [video] = useState(() => {
      const vid = document.createElement("video");
      vid.src = url;
      vid.crossOrigin = "Anonymous";
      vid.loop = true;
      vid.muted = true;
      vid.play();
      return vid;
    });
  
    return (
      <group>
        <mesh>
            <meshBasicMaterial color='gray' />
        </mesh>
        <mesh rotation={[0, 1.5708, 0]} position={[3.25, 2.5, 10.2]}>
          <planeGeometry args={[1.9, 1.6]} />
          <meshStandardMaterial emissive={"white"} side={THREE.DoubleSide}>
            <videoTexture attach="map" args={[video]} />
            <videoTexture attach="emissiveMap" args={[video]} />
          </meshStandardMaterial>
        </mesh>
      </group>
    );
}

export default Streaming

