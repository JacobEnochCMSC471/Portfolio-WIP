import React from "react";
import './styles.css'
import '../components/styles/about.css'
import ImageCircles from "../components/ImageCircles";

const About = () => {
  return (
    <div id='main-page'>
      <div id='left-side'>
        <ImageCircles/>
      </div>
      <div id='right-side'>
        <ImageCircles/>
      </div>
    </div>
  );
};

export default About;