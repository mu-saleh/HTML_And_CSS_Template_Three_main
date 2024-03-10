import React from 'react';
import OurSkillsImage from '../assents/imgs/skills.png';

function OurSkills() {
    return (
        <div className="our-skills" id="our-skills">
            <h2 className="main-title">Our Skills</h2>
            <div className="container">
                <img src={OurSkillsImage} alt="" />
                <div className="skills">
                    <div className="skill">
                        <h3>HTML <span>80%</span></h3>
                        <div className="the-progress">
                            <span style={{ width: "80%" }} data-width="80%"></span>
                        </div>
                    </div>
                    <div className="skill">
                        <h3>CSS <span>85%</span></h3>
                        <div className="the-progress">
                            <span style={{ width: "85%" }} data-width="85%"></span>
                        </div>
                    </div>
                    <div className="skill">
                        <h3>JavaScript <span>70%</span></h3>
                        <div className="the-progress">
                            <span style={{ width: "70%" }} data-width="70%"></span>
                        </div>
                    </div>
                    <div className="skill">
                        <h3>Python <span>80%</span></h3>
                        <div className="the-progress">
                            <span style={{ width: "80%" }} data-width="80%"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurSkills;
