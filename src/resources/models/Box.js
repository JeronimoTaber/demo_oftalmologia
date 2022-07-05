import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
const Box = () => {
    const ref = useRef();

  return (
    <mesh ref={ref}>
        <boxBufferGeometry />
        <meshBasicMaterial color='blue' />
    </mesh>
  )
}

export default Box