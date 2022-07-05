import { Text, OrbitControls } from "@react-three/drei";
import { ARCanvas, DefaultXRControllers } from "@react-three/xr";
import React, { Suspense } from "react";
import EyeModel from "../resources/models/Eye";

const ARFiber = () => {
  return (
    <div className="container3D" style={{ width: "100%", height: "100vh" }}>
      <ARCanvas vr="true"
      camera={{position: [0.1, 0.1, 0.1]}}
      >
        {/* <mesh position={[ 0, 0, -1.0]}>
                <boxBufferGeometry args={[0.5, 0.2, 0.09]} />
                <meshBasicMaterial color={"#393939"} />
                <Text 
                    position={[0,0, 0.1]}
                    fontSize={0.03}
                    color={"#fff"}
                    anchorX="center"
                    anchorY="middle"
                    >
                AR Experience
                </Text>
            </mesh> */}
        
        <directionalLight color={"#ffffff"} position={[5, 5, 5]} />
        <ambientLight color={"#ffffff"} />

        <Suspense fallback={null}>
          <EyeModel />
        </Suspense>
        <DefaultXRControllers />
        <OrbitControls target={[0, 0 ,-0.3]} />
      </ARCanvas>
    </div>
  );
};

export default ARFiber;
