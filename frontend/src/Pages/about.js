import React from "react";
import './styles.css'
import '../components/styles/about.css'
import ImageCircles from "../components/ImageCircles";

const About = () => {
  return (
    <div id='main-page'>
      <div class="split left">
        <div class="centered">
          <ImageCircles/>
        </div>
      </div> 

      <div class="split right">
        <div class="centered">
          <ImageCircles/>
        </div>
      </div> 

    </div>
  );
};

export default About;