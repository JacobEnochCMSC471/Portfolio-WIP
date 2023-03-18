import React from "react";
import '../components/styles/about.css'
import ImageCircles from "../components/ImageCircles";
import { Background } from '../components/Background'
import ImageCarousel from '../components/ImageCarosel'

const About = () => {
  return (
    <div id='main-page'>
      <div class="split left">
        <div id='left-header'>
          <div class='centered'>
            <h1> Hello!</h1>
          </div>
        </div>
      </div>

      <div class="split right">
      </div>

      <Background>

      </Background>
    </div>
  );
};

export default About;