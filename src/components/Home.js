import React from "react";
import "../App.css";
import Navbar from "./Navbar";
 import space from "../assets/kl.jpg";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="con1">
        <div className="left">
          <h1>Think. Make. solve.</h1>
          <span>What we Do</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            illo?
          </p>
          <button className="ll">Learn More</button>
        </div>
        <div className="right2">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={3.5} >
            <MeshDistortMaterial color="#228736" attach="material" distort={0.5} speed={2} />
            </Sphere>
           
          </Canvas>
          <img src={space} alt="" className="imga1" />
        </div>
      </div>
    </div>
  );
};

export default Home;
