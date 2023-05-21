import React, { useState, useEffect } from 'react'

//Source: https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project

const ImageGallery = () => {
    
    const [currentData, setCurrentData] = useState(0);
    
    // Fetch a single image from the FLask API - sent in Base64 
    useEffect(() => {
        fetch('/img_api').then(res => res.json()).then(data => {
            setCurrentData(data.img);
        });
    }, []);

    let base_str = 'data:image/png;base64, '
    let img_str = String(currentData)
    let img_src = base_str.concat(img_str)
    
    return (
        <div className="gallery">
            <img src={img_src} alt='' />
        </div>
    );
}

export default ImageGallery;