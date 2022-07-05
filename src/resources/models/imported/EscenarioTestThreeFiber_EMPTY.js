/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function ScenarioModelEmpty({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/resources/models/scenario/EscenarioTestThreeFiber_EMPTY.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Arquitectura_Habitacion_E001.geometry} material={materials.Habitacion_E} position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
    </group>
  )
}

useGLTF.preload('/EscenarioTestThreeFiber_EMPTY.glb')
