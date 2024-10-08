import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import ThreedModel from './ui/threed_model'

export default function Model() {
  return (
    <Canvas camera={{ position: [100, -100,70], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-5,-5,5]} intensity={4} />
        <Suspense fallback={null}>
            <ThreedModel />
        </Suspense>
    </Canvas>
  )
}
