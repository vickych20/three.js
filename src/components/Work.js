import React from 'react';
import "../App.css";
import './work.css'
import { Canvas} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from './Cube';








const Work = () => {
  

  // const earthRef = useRef();
  // const cloudsRef = useRef();
  // useFrame(({ clock }) => {
  //   const elapswedTime = clock.getElapsedTime();
  //   earthRef.current.rotation.y = elapswedTime / 6;
  //   cloudsRef.current.rotation.y = elapswedTime / 6;
  // });












  return (
    <div className="work">
      <div className="con">
        <div className="left">
          <h1>Think. Make. solve.</h1>
          <span>What we Do</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            illo?
          </p>
          <button className="ll">Learn More</button>
        </div>
        <div className="right rtr">
          <Canvas camera={{fov:65,position:[10,5,5]}}>
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

          {/* <img src={space} alt="" className="imga" /> */}
        </div>
      </div>
    </div>
  );
}

export default Work