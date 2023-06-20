import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "react-three-fiber";
import { ModelEarth } from "../../models/Solar_impulse_flight_path";

export default function ModelContact({ children }) {

  return (
    <Canvas
      shadows
      style={{
        height: "100vh",
        marginTop: "50px"
      }}
      alpha={true}
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        intensity={7}
        position={[12, 12, 12]}
        shadow-mapSize={[2040, 2040]}
      />

      <hemisphereLight intensity={0.13} position={[0, 50, 0]} />

      <ModelEarth scale={[2, 2, 2]} />

      <OrbitControls
        maxPolarAngle={Math.PI / 2.5}
        enableZoom={false}
        enableRotate={false} 
        autoRotate
        autoRotateSpeed={0.5} 
      />
    </Canvas>
  );
}
