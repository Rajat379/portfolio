import React from "react";
import Typewriter from "typewriter-effect";
import "./home.css";
import imgpath from '../svg-2.svg'

export const Home = () => {
  return (
    <div className="hcontainer">
      <div className="content">
        <div className="heading">Hello, I am Rajat Garg</div>

        <div className="subtitle">IT graduate from NIT Kurukshetra</div>
        <div className="typeEffect">
        <Typewriter
          onInit={(typewriter) => {
            typewriter

              .typeString("Web developer")
              .pauseFor(400)
              .deleteAll()
              .typeString("Competetive programmer")
              .pauseFor(400)
              .deleteAll()
              .typeString("Open source contributor")
              .start();
          }}
        />
        </div>
      </div>

      <div className="stockImage">
          <img src={imgpath} className="stockImage-image" alt="Not available"/>
      </div>
    </div>
  );
};
