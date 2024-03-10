import React from 'react';
import galleryImage1 from '../assents/imgs/gallery-01.png';
import galleryImage2 from '../assents/imgs/gallery-02.png';
import galleryImage3 from '../assents/imgs/gallery-03.jpg';
import galleryImage4 from '../assents/imgs/gallery-04.png';
import galleryImage5 from '../assents/imgs/gallery-05.jpg';
import galleryImage6 from '../assents/imgs/gallery-06.png';


function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="box">
                    <h3>Elzero</h3>
                    <ul className="social">
                        <li>
                            <a href="https://www.facebook.com" className="facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com" className="twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com" className="youtube">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </li>
                    </ul>
                    <p className="text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
                        nulla rem, dignissimos iste aspernatur
                    </p>
                </div>
                <div className="box">
                    <ul className="links">
                        <li><a href="https://www.example.com">Important Link 1</a></li>
                        <li><a href="https://www.example.com">Important Link 2</a></li>
                        <li><a href="https://www.example.com">Important Link 3</a></li>
                        <li><a href="https://www.example.com">Important Link 4</a></li>
                        <li><a href="https://www.example.com">Important Link 5</a></li>
                    </ul>
                </div>
                <div className="box">
                    <div className="line">
                        <i className="fas fa-map-marker-alt fa-fw"></i>
                        <div className="info">
                            Egypt, Giza, Inside The Sphinx, Room Number 220
                        </div>
                    </div>
                    <div className="line">
                        <i className="far fa-clock fa-fw"></i>
                        <div className="info">Business Hours: From 10:00 To 18:00</div>
                    </div>
                    <div className="line">
                        <i className="fas fa-phone-volume fa-fw"></i>
                        <div className="info">
                            <span>+201147573233</span>
                            <span>+201003101501</span>
                        </div>
                    </div>
                </div>
                <div className="box footer-gallery">
                    <img src={galleryImage1} alt="" />
                    <img src={galleryImage2} alt="" />
                    <img src={galleryImage3} alt="" />
                    <img src={galleryImage4} alt="" />
                    <img src={galleryImage5} alt="" />
                    <img src={galleryImage6} alt="" />
                </div>
            </div>
            <p className="copyright">Made By Mustafa</p>
        </div>
    );
}

export default Footer;
