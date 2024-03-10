import React, { useState, useEffect } from 'react';
import eventsImage from '../assents/imgs/events.png';
import Countdown from 'react-countdown-now';

function Events() {
    const [targetDate, setTargetDate] = useState(new Date().getTime() + 15 * 24 * 60 * 60 * 1000); // 15 days from now

    useEffect(() => {
        const interval = setInterval(() => {
            setTargetDate(new Date().getTime() + 15 * 24 * 60 * 60 * 1000); // Reset target date every time component re-renders
        }, 1000); // Update every second

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="events" id="events">
            <div className="dots dots-up"></div>
            <div className="dots dots-down"></div>
            <div className="dots dots-up"></div>
            <div className="dots dots-down"></div>
            <h2 className="main-title">Latest Events</h2>
            <div className="container">
                <img src={eventsImage} alt="" />
                <div className="info">
                    <div className="time">
                        <div className="unit">
                            <span className="days">
                                <Countdown date={targetDate} renderer={({ days }) => <>{days}</>} />
                            </span>
                            <span>Days</span>
                        </div>
                        <div className="unit">
                            <span className="hours">
                                <Countdown date={targetDate} renderer={({ hours }) => <>{hours}</>} />
                            </span>
                            <span>Hours</span>
                        </div>
                        <div className="unit">
                            <span className="minutes">
                                <Countdown date={targetDate} renderer={({ minutes }) => <>{minutes}</>} />
                            </span>
                            <span>Minutes</span>
                        </div>
                        <div className="unit">
                            <span className="seconds">
                                <Countdown date={targetDate} renderer={({ seconds }) => <>{seconds}</>} />
                            </span>
                            <span>Seconds</span>
                        </div>
                    </div>
                    <h2 className="title">Tech Masters Event {new Date().getFullYear()}</h2>
                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
                        tenetur doloremque iusto ut adipisci quam ratione aliquam excepturi
                        nulla in harum, veritatis porro
                    </p>
                </div>
                <div className="subscribe">
                    <form action="">
                        <input type="email" placeholder="Enter Your Email" />
                        <input type="submit" value="Subscribe" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Events;
