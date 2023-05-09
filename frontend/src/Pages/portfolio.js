import React from 'react';
import { Background } from '../components/Background'
import '../components/styles/portfolio/portfolio.css'

const Portfolio = () => {
  return (
    <div id='main-page-portfolio'>
      <div class="split left">
        <div class="centered">
          <p> Metal Benders LLC Projects </p>
        </div>
      </div>

      <div class="split right">
        <div class="centered">
          <p> Programming Projects </p>
        </div>
      </div>
      <Background />
    </div>
  );
};

export default Portfolio;