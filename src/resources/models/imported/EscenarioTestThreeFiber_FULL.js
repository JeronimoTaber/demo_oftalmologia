/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function ScenarioModelFull({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/resources/models/scenario/EscenarioTestThreeFiber_FULL.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Arquitectura_Habitacion_E001.geometry} material={materials.Habitacion_E} position={[9.02, 0.5, 8.68]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.SM_Vertical_Blinds_01004.geometry} material={materials['Inst_Vertical_Blinds_01.005']} position={[10.91, 2.9, 13.49]} rotation={[-Math.PI, 1.56, -Math.PI]} scale={0.01} />
      <group position={[12.48, 0.5, 11.48]} rotation={[-Math.PI, 0.01, -Math.PI]} scale={0.01}>
        <mesh geometry={nodes.SM_Door009.geometry} material={materials['M_Door.010']} />
        <mesh geometry={nodes.SM_Door009_1.geometry} material={materials['M_Glass.010']} />
      </group>
      <mesh geometry={nodes.SM_DoorFrame6008.geometry} material={materials['M_Frame.009']} position={[12.65, 0.5, 11.96]} rotation={[0, 0.01, 0]} scale={[0.02, 0.01, 0.01]} />
      <mesh geometry={nodes['interactable#Abrir_cooler'].geometry} material={materials.InvisibleMaterial} position={[4.68, 1.57, 10.9]} scale={[0.32, 0.22, 0.23]} />
      <mesh geometry={nodes.Conservadora.geometry} material={materials.lambert1} position={[4.66, 1.5, 10.9]} rotation={[Math.PI / 2, 0, 0.36]} scale={0.01}>
        <mesh geometry={nodes.Conservadora_Tapa.geometry} material={materials.lambert1} position={[0, -0.05, -15.1]} />
      </mesh>
      <group position={[4.52, 1.37, 10.77]} rotation={[Math.PI / 2, 0, 1.71]} scale={0.01}>
        <mesh geometry={nodes.Mesh028.geometry} material={materials.FrascoOrina3_Mat} />
        <mesh geometry={nodes.Mesh028_1.geometry} material={materials.FrascoOrina2_Mat} />
        <mesh geometry={nodes.Mesh028_2.geometry} material={materials.FrascoOrina_Mat} />
      </group>
      <mesh geometry={nodes.Gradilla002.geometry} material={materials['lambert1.004']} position={[4.69, 1.42, 10.92]} rotation={[Math.PI / 2, 0, -1.21]} scale={0.01}>
        <group position={[7.95, 9.83, 0.74]}>
          <mesh geometry={nodes.Mesh023.geometry} material={materials['Tubo3_Mat.002']} />
          <mesh geometry={nodes.Mesh023_1.geometry} material={materials['Tubo2_Mat.002']} />
          <mesh geometry={nodes.Mesh023_2.geometry} material={materials['Tubo1_Mat.002']} />
        </group>
        <group position={[7.99, 14.8, 0.77]}>
          <mesh geometry={nodes.Mesh022.geometry} material={materials['TuboP3_Mat.002']} />
          <mesh geometry={nodes.Mesh022_1.geometry} material={materials['TuboP1_Mat.001']} />
          <mesh geometry={nodes.Mesh022_2.geometry} material={materials['TuboP2_Mat.001']} />
        </group>
        <group position={[8.02, 4.84, 0.78]}>
          <mesh geometry={nodes.Mesh020.geometry} material={materials.TuboVacio1_Mat} />
          <mesh geometry={nodes.Mesh020_1.geometry} material={materials.TuboVacio2_Mat} />
        </group>
      </mesh>
      <group position={[4.7, 1.5, 10.78]} rotation={[Math.PI, 0.36, -Math.PI / 2]} scale={0.01}>
        <mesh geometry={nodes.Mesh025.geometry} material={materials.OrdenesMed1} />
        <mesh geometry={nodes.Mesh025_1.geometry} material={materials.Ordenes_Mat} />
      </group>
      <mesh geometry={nodes.Plane001.geometry} material={materials.CartelDUOC} position={[3.23, 2.47, 10.2]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1, 1, 0.86]} />
      <group position={[7.04, 0.5, 9.12]} rotation={[-Math.PI, 0.02, -Math.PI]} scale={0.01}>
        <mesh geometry={nodes.SM_MERGED_SM_Wash_Basin_4.geometry} material={materials.Inst_Laboratory_Furniture_01} />
        <mesh geometry={nodes.SM_MERGED_SM_Wash_Basin_4_1.geometry} material={materials.Inst_Laboratory_Furniture_02} />
      </group>
      <mesh geometry={nodes.SM_Hand_Dryer.geometry} material={materials.Inst_Hand_Dryer} position={[6.89, 2.13, 9.04]} rotation={[0, -0.02, 0]} scale={0.01} />
      <mesh geometry={nodes.SM_SoapDispenser_01a.geometry} material={materials.MI_SoapDispenser_01a} position={[7.21, 2.09, 9.04]} rotation={[Math.PI, -1.55, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.SM_Toweldispenser_01a.geometry} material={materials.MI_PaperTowels_01a} position={[6.51, 2.14, 9.04]} rotation={[Math.PI, -1.55, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.SM_Office_Chair_02.geometry} material={materials['Inst_Office_Chair_02.001']} position={[3.93, 0.51, 10.24]} rotation={[Math.PI, -0.94, Math.PI]} scale={0.01} />
      <mesh geometry={nodes.SM_Trash_Can_04001.geometry} material={materials['Inst_Garbage_Bins_01.001']} position={[3.6, 0.5, 13.41]} rotation={[0, -1.57, 0]} scale={0.01} />
      <mesh geometry={nodes.SM_Trash_Can_04002.geometry} material={materials['Inst_Garbage_Bins_01.002']} position={[7.61, 0.5, 9.19]} rotation={[0, 1.51, 0]} scale={0.01} />
      <mesh geometry={nodes.Libro_Registro.geometry} material={materials['lambert1.010']} position={[4.89, 1.36, 9.56]} rotation={[-Math.PI / 2, 1.55, 1.58]} scale={0.01} />
      <mesh geometry={nodes.CartelNoComer.geometry} material={materials['NoComerCart_Mat.001']} position={[3.28, 2.82, 11.49]} rotation={[1.57, -0.02, -1.55]} scale={3.25} />
      <mesh geometry={nodes.CartelNoLiquidos.geometry} material={materials['NoLiqCart_Mat.001']} position={[3.25, 2.83, 12.45]} rotation={[1.57, -0.02, -1.55]} scale={3.25} />
      <mesh geometry={nodes.CartelMantenerOrden.geometry} material={materials['OrdenCart_Mat.001']} position={[3.27, 2.82, 11.98]} rotation={[1.57, -0.02, -1.55]} scale={3.25} />
      <mesh geometry={nodes.DelantaCart001.geometry} material={materials['DelantalCart_Mat.001']} position={[8.16, 2.43, 9.05]} rotation={[1.58, 0, 0]} scale={1.89} />
      <mesh geometry={nodes.MascarillaCart001.geometry} material={materials['MascarillaCart_Mat.001']} position={[7.84, 2.43, 9.05]} rotation={[1.58, 0, 0]} scale={1.89} />
      <mesh geometry={nodes.SM_Laboratory_Table_01.geometry} material={materials['Inst_Tables_and_Curbstone_01.002']} position={[4.7, 0.5, 10.27]} rotation={[Math.PI, -1.55, Math.PI]} scale={0.01} />
      <group position={[11.22, 3.5, 10.71]} scale={[0.02, 0.01, 0.02]}>
        <mesh geometry={nodes.SM_Lamp_03001.geometry} material={materials['Inst_Bulb_02.001']} />
        <mesh geometry={nodes.SM_Lamp_03001_1.geometry} material={materials['Inst_Ceiling_03.004']} />
      </group>
      <group position={[5.49, 3.5, 10.71]} scale={[0.02, 0.01, 0.02]}>
        <mesh geometry={nodes.SM_Lamp_03002.geometry} material={materials['Inst_Bulb_02.002']} />
        <mesh geometry={nodes.SM_Lamp_03002_1.geometry} material={materials['Inst_Ceiling_03.009']} />
      </group>
    </group>
  )
}

useGLTF.preload('/EscenarioTestThreeFiber_FULL.glb')