import React from 'react';
import { Background } from '../components/Background'
import '../components/styles/portfolio/portfolio.css'

const Portfolio = () => {
  return (
    <div id='main-page-portfolio'>
      <div class="splitport leftport">
        <div class="centered">
          <a href="/MetalBenders" id='metalbenders'> Metal Benders LLC Projects </a>
        </div>
      </div>

      <div class="splitport rightport">
        <div class="centered">
          <a href="/csprojects" id = "csproj"> Programming Projects </a>
        </div>
      </div>
      <Background />
    </div>
  );
};

export default Portfolio;