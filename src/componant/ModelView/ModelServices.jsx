import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import { ModelIphone } from "../../models/Iphone_12_pro";
import { ModelLaptop } from "../../models/Laptop";

export default function ModelServices({ children }) {

  return (
    <Canvas
      shadows
      style={{
        height: "100vh",
      }}
      alpha={true}
      camera={{ position: [0, -2, 4] }} // Set the initial camera position
    >
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.8} position={[10, 10, 10]} angle={Math.PI / 8} />
      <directionalLight
        castShadow
        intensity={7}
        position={[12, 12, 12]}
        shadow-mapSize={[2040, 2040]}
      />

      <hemisphereLight intensity={0.13} position={[0, 50, 0]} />

      <group position={[-1, -1, -1]}>
        <ModelIphone scale={[0.02, 0.02, 0.02]} position={[2.4, 0, 2]} /> 
        <ModelLaptop scale={[2.3, 2.3, 2.3]} position={[1, 0, 0]} /> 
      </group>

      <OrbitControls
        maxPolarAngle={Math.PI / 2.5}
        enableZoom={false}
        enableRotate={true}
        autoRotate
      />

    </Canvas>
    
  );
}

