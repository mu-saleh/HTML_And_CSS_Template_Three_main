import React from 'react';

function Services() {
    return (
        <div className="services" id="services">
            <h2 className="main-title">Services</h2>
            <div className="container">
                <div className="box">
                    <i className="fas fa-user-shield fa-4x"></i>
                    <h3>Security</h3>
                    <div className="info">
                        <a href="https://example.com/security">Details</a>
                    </div>
                </div>
                <div className="box">
                    <i className="fas fa-tools fa-4x"></i>
                    <h3>Fixing Issues</h3>
                    <div className="info">
                        <a href="https://example.com/fixing-issues">Details</a>
                    </div>
                </div>
                <div className="box">
                    <i className="fas fa-map-marked-alt fa-4x"></i>
                    <h3>Location</h3>
                    <div className="info">
                        <a href="https://example.com/location">Details</a>
                    </div>
                </div>
                <div className="box">
                    <i className="fas fa-laptop-code fa-4x"></i>
                    <h3>Coding</h3>
                    <div className="info">
                        <a href="https://example.com/coding">Details</a>
                    </div>
                </div>
                <div className="box">
                    <i className="fas fa-palette fa-4x"></i>
                    <h3>Design</h3>
                    <div className="info">
                        <a href="https://example.com/design">Details</a>
                    </div>
                </div>
                <div className="box">
                    <i className="fas fa-bullhorn fa-4x"></i>
                    <h3>Marketing</h3>
                    <div className="info">
                        <a href="https://example.com/marketing">Details</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
