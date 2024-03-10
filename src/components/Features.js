import React, { useState } from 'react';
import featuresImage1 from '../assents/imgs/features-01.jpg';
import featuresImage2 from '../assents/imgs/features-02.jpg';
import featuresImage3 from '../assents/imgs/features-03.jpg';



function Features() {
    // Define states for each feature to track if it's expanded or not
    const [qualityExpanded, setQualityExpanded] = useState(false);
    const [timeExpanded, setTimeExpanded] = useState(false);
    const [passionExpanded, setPassionExpanded] = useState(false);

    // Function to toggle the expanded state for each feature
    const toggleExpandedState = (feature) => {
        switch (feature) {
            case 'quality':
                setQualityExpanded(!qualityExpanded);
                break;
            case 'time':
                setTimeExpanded(!timeExpanded);
                break;
            case 'passion':
                setPassionExpanded(!passionExpanded);
                break;
            default:
                break;
        }
    };

    return (
        <div className="features" id="features">
            <h2 className="main-title">Features</h2>
            <div className="container">
                {/* Feature: Quality */}
                <div className={`box quality ${qualityExpanded ? 'expanded' : ''}`}>
                    <div className="img-holder">
                        <img src={featuresImage1} alt="" />
                    </div>
                    <h2>Quality</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum
                        hic veniam eligendi minima
                    </p>
                    {/* Toggle button */}
                    <a href="https://www.example.com" onClick={() => toggleExpandedState('quality')}>
                        {qualityExpanded ? 'Less' : 'More'}
                    </a>
                </div>
                {/* Feature: Time */}
                <div className={`box time ${timeExpanded ? 'expanded' : ''}`}>
                    <div className="img-holder">
                        <img src={featuresImage2} alt="" />
                    </div>
                    <h2>Time</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum
                        hic veniam eligendi minima
                    </p>
                    {/* Toggle button */}
                    <a href="https://www.example.com" onClick={() => toggleExpandedState('time')}>
                        {timeExpanded ? 'Less' : 'More'}
                    </a>
                </div>
                {/* Feature: Passion */}
                <div className={`box passion ${passionExpanded ? 'expanded' : ''}`}>
                    <div className="img-holder">
                        <img src={featuresImage3} alt="" />
                    </div>
                    <h2>Passion</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum
                        hic veniam eligendi minima
                    </p>
                    {/* Toggle button */}
                    <a href="https://www.example.com" onClick={() => toggleExpandedState('passion')}>
                        {passionExpanded ? 'Less' : 'More'}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Features;
