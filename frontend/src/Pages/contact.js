import React from 'react';
import '../components/styles/contact/contact.css'
import { Background } from '../components/Background'

const Contact = () => {
  return (
    <div class="main-page">
      <div class="centered contact">
        <div class="contact-header">
          <h1> Contact Me! </h1>
        </div>
        <div class="contact-text">
          <div class="contact-left">
             Main Email Address:
          </div>
          <div class="contact-right">
            mourgraine12@gmail.com
          </div>
        </div>
        <div class="contact-text">
          <div class="contact-left">
             Aux. Email Address:
          </div>
          <div class="contact-right">
            jenoch1@umbc.edu
          </div>
        </div>
        <div class="contact-text">
          <div class="contact-left">
             Phone Number:
          </div>
          <div class="contact-right">
            443-915-0600
          </div>
        </div>
        <div class="contact-text">
          <div class="contact-left">
             Discord Handle:
          </div>
          <div class="contact-right">
            Mourgraine#6691
          </div>
        </div>
        <div class="contact-text">
          <div class="contact-left-linkedin">
              <a href="https://www.linkedin.com/in/jacob-enoch-090b0118b/" class="special-link" target="_blank" rel="noreferrer"><p> LinkedIn </p> </a>
          </div>
        </div>
      </div>
      <Background />
    </div>
  );
};

export default Contact;