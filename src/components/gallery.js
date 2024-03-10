import React from 'react';
import galleryImage1 from '../assents/imgs/gallery-01.png';
import galleryImage2 from '../assents/imgs/gallery-02.png';
import galleryImage3 from '../assents/imgs/gallery-03.jpg';
import galleryImage4 from '../assents/imgs/gallery-04.png';
import galleryImage5 from '../assents/imgs/gallery-05.jpg';
import galleryImage6 from '../assents/imgs/gallery-06.png';
function Gallery() {
    return (
        <div className="gallery" id="gallery">
            <h2 className="main-title">Gallery</h2>
            <div className="container">
                <div className="box">
                    <div className="image">
                        <img src={galleryImage1} alt="" />
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                        <img src={galleryImage2} alt="" />
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                        <img src={galleryImage3} alt="" />
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                        <img src={galleryImage4} alt="" />
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                        <img src={galleryImage5} alt="" />
                    </div>
                </div>
                <div className="box">
                    <div className="image">
                        <img src={galleryImage6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;