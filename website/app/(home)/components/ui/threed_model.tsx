"use client";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";

useGLTF.preload('IEEE_SPS_3D_LOGO_FINAL.glb')
export default function ThreedModel() {
    const group=useRef<Group>(null);
    const { nodes, materials, animations, scene } = useGLTF('IEEE_SPS_3D_LOGO_FINAL.glb');
    return(
        <group ref={group}>
            <primitive 
            object={scene} 
            scale={[300, 300, 300]} 
            rotation={[-Math.PI / 2, 0, 0]}
             />
        </group>
    )
  
}