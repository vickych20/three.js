import React, {  } from "react";
import "./test.css";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls
 
} from "@react-three/drei";
import styled from "styled-components";
import Cube from "./Cube";

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const Test = () => {


  return (
    <Container>
      <Canvas>
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
       <Cube/>
      </Canvas>
    </Container>
  );
};

export default Test;
