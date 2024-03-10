import React from 'react';
import landingImage from '../assents/imgs/landing-image.png';
function Landing() {
    return (
        <div className="landing">
            <div className="container">
                <div className="text">
                    <h1>Welcome, To Mustafa World</h1>
                    <p>
                        Here I am gonna share everything about my life. Books I am reading,
                        Games I am Playing, Stories and Events
                    </p>
                </div>
                <div className="image">
                    <img src={landingImage} alt="" />
                </div>
            </div>
            <a href="#articles" className="go-down">
                <i className="fas fa-angle-double-down fa-2x"></i>
            </a>
        </div>
    );
}

export default Landing;
