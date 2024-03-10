import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const videoData = [
    { url: 'https://www.youtube.com/watch?v=VIDEO_ID_1', title: 'How To Create Sub Domain', duration: '05:18' },
    { url: 'https://www.youtube.com/watch?v=VIDEO_ID_2', title: 'Playing With The DNS', duration: '03:18' },
    { url: 'https://www.youtube.com/watch?v=VIDEO_ID_3', title: 'Everything About The Virtual Hosts', duration: '05:25' },
    { url: 'https://www.youtube.com/watch?v=VIDEO_ID_4', title: 'How To Monitor Your Website', duration: '04:16' },
    { url: 'https://www.youtube.com/watch?v=VIDEO_ID_5', title: 'Uncharted Beating The Last Boss', duration: '07:48' },
    { url: 'https://www.youtube.com/watch?v=VIDEO_ID_6', title: 'Killing Floor', duration: '10:21' },
    { url: 'https://www.youtube.com/watch?v=VIDEO_ID_7', title: 'Final Straw', duration: '09:13' },
    { url: 'https://www.youtube.com/watch?v=VIDEO_ID_8', title: 'The Unforgiven', duration: '08:10' },
    // Add more video objects with YouTube URLs
];

function Videos() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleVideoClick = (videoUrl) => {
        setSelectedVideo(videoUrl);
    };

    return (
        <div className="videos" id="videos">
            <h2 className="main-title">Top Videos</h2>
            <div className="container">
                <div className="holder">
                    <div className="list">
                        <div className="name">
                            Top Videos
                            <i className="fas fa-random"></i>
                        </div>
                        <ul>
                            {videoData.map((video, index) => (
                                <li key={index} onClick={() => handleVideoClick(video.url)}>
                                    {video.title} <span>{video.duration}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="preview">
                        {selectedVideo && (
                            <div className="video-player">
                                <ReactPlayer url={selectedVideo} controls={true} width="100%" height="100%" />
                                <div className="info">{videoData.find(video => video.url === selectedVideo).title}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Videos;
