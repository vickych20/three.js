import React, { useRef } from 'react'
import {
  
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";

import { useFrame } from '@react-three/fiber';




const Cube = () => {
 












  const textRef = useRef();
  useFrame(
      (state)=>(textRef.current.position.x=Math.sin(state.clock.elapsedTime))
  )
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
       
      >
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 2]} />
          <color attach="background" args={["#dc9dcd"]} />
          <Text ref={textRef} fontSize={1} color="blue">
            vicky
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
}

export default Cube