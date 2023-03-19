import React from "react";
import '../components/styles/about.css'
import { Background } from '../components/Background'
import img1 from '../images/me1.png'
import demoVideo from '../images/Scoreboard Demo v2.mp4'

const About = () => {
  return (
    <div id='main-page'>
      <div class="split left">
        <div id='left-header'>
          <div class='centered'>
            <h1> Hello!</h1>
            <p> Welcome to my page. I am a recent Computer Science graduate from the University of Maryland, Baltimore County.</p>
            <p> Here, you'll be able to find things that I've worked on!</p>
            <p> Just a few things that I've worked on can be found below: </p>

            <div class="video-container">
              <video width="500" height="500" controls >
                <source src={demoVideo} type="video/mp4" />
              </video>
              <div class="centered">
                <p> An Arduino Scoreboard program written in C++.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="split right">
        <div class="centered">
          <div class="frame">
            <img src={img1} alt="Fancy Jake" id="img1" />
          </div>
        </div>
      </div>
      <Background>

      </Background>
    </div>
  );
};

export default About;