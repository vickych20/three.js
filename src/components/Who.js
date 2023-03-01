import React from 'react';
import "../App.css";
import space from '../assets/t.jpg'





const Who = () => {
  return (
    <div className="who">
      <div className="con">
        <div className="right">
          <img src={space} alt="" className="imga" />
        </div>
        <div className="left">
          <h1>Think. Make. solve.</h1>
          <span>What we Do</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            illo?
          </p>
          <button className="ll">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Who