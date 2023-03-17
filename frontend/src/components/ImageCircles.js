import React from "react";
import photo1 from "../images/me1.jpg"
import '../components/styles/ImageCircles.css'

const ImageCircles= () => {

  return (
    <div id='main-container'>
          <img src={photo1} alt='Fancy Jake' id='img1'></img>
    </div>
  );
};

export default ImageCircles;