import React from 'react';
import WorkSteps0 from '../assents/imgs/work-steps.png';
import WorkStepsImage1 from '../assents/imgs/work-steps-1.png';
import WorkStepsImage2 from '../assents/imgs/work-steps-2.png';
import WorkStepsImage3 from '../assents/imgs/work-steps-3.png';

function WorkSteps() {
    return (
        <div className="work-steps" id="work-steps">
            <h2 className="main-title">How It Works ?</h2>
            <div className="container">
                <img src={WorkSteps0} alt="" className="image" />
                <div className="info">
                    <div className="box">
                        <img src={WorkStepsImage1} alt="lorem ipsum dolor sit amet" />
                        <div className="text">
                            <h3>Business Analysis</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum
                                recusandae debitis vel
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={WorkStepsImage2} alt="lorem ipsum dolor sit amet" />
                        <div className="text">
                            <h3>Architecture</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum
                                recusandae debitis vel
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={WorkStepsImage3} alt="lorem ipsum dolor sit amet" />
                        <div className="text">
                            <h3>Development</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum
                                recusandae debitis vel
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkSteps;
