import React from "react";
import '../components/styles/about.css'
import { Background } from '../components/Background'
import img1 from '../images/me1.png'
import demoVideo1 from '../images/Scoreboard Demo v2.mp4'
import demoVideo2 from '../images/447 Presentation2-PGIRL.mp4'


const About = () => {
  return (
    <div class='main-page'>
      <Background>
      <div class="split left">
        <div class='left-header'>
          <div class='centered-text'>
            <h1> Hello!</h1>
            <p> Welcome to my page. I am a recent Computer Science graduate from the University of Maryland, Baltimore County. I'm also an aspiring and currently job-seeking software developer.</p>
            <p> Here, you'll be able to find things that I've worked on!</p>
            <p> Just a few things that I've worked on can be found below: </p>
            <video controls class="video">
              <source src={demoVideo1} type="video/mp4" />
            </video>
            <div class="vid-text">
              <a href="https://github.com/JacobEnochCMSC471/Score-Board-RGB"><p> An Arduino Scoreboard program written in C++. </p> </a>
            </div>
            <video controls class="video">
              <source src={demoVideo2} type="video/mp4" />
            </video>
            <div class="vid-text">
              <a href="https://github.com/JacobEnochCMSC471/CMSC447-Project-IRL-Pokemon-Go"><p> A Pokemon Go-like webgame made with a 5 person team using Django and Agile methodology. </p> </a>
            </div>
          </div>
        </div>
      </div>

      <div class="split right">
        <div class="centered">
            <img src={img1} alt="Fancy Jake" id="img1" />
          </div>
        </div>
      </Background>
    </div>
  );
};

export default About;