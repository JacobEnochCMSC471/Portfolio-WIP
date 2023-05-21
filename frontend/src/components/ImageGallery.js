import React, { useState, useEffect } from 'react';
import axios from "axios"

/*
const base_path = './public/images/mb_photos/'
const base_photo_name = 'img_'
const file_extension = '.jpg'

var photo_paths = []

for (let i = 0; i < 25; i++){
    let curr_photo = base_path + base_photo_name + i + file_extension
    photo_paths.push(curr_photo)
}
*/

const ImageGallery = () => {
    
    const [currentData, setCurrentData] = useState(0);
    
    useEffect(() => {
        fetch('/img_api').then(res => res.json()).then(data => {
            setCurrentData(data.img);
        });
    }, []);


    let base_str = 'data:image/png;base64, '
    let img_str = String(currentData)
    let img_src = base_str.concat(img_str)

    console.log(img_src)
    
    
    return (
        <div className="gallery">
            <img src={img_src} alt='' />
        </div>
    );
}

export default ImageGallery;