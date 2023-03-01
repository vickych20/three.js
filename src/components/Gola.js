import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";


const Gola = () => {
  return (
    <div>
      <Canvas camera={{ fov: 65, position: [10, 5, 5] }}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          enablePan={true}
          enableRotate={true}
          zoomSpeed={2.3}
          panSpeed={4.5}
          rotateSpeed={1.4}
        />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Sphere  args={[2, 3, 4]} scale={4.5}/>
      </Canvas>
    </div>
  );
}

export default Gola