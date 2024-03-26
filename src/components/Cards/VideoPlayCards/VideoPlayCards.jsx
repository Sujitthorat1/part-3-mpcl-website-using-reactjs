import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import bgVideo1 from '../../../assets/vid/web-car.mp4';
import bgVideo2 from '../../../assets/vid/vid2.mp4';
import bgVideo3 from '../../../assets/vid/vid3.mp4';
import bgVideo4 from '../../../assets/vid/cloud.mp4';



import './videoPlayCards.scss';

function VideoPlayCards() {
    // Array containing video data
    const videos = [
        {
            videoSrc: bgVideo1,
            title: 'Video Title Text',
            description: 'Here is a short description of the video. You can still see the video playing underneath this overlay.',
        },
        {
            videoSrc: bgVideo2,
            title: 'DJX Title Text',
            description: 'Here is a short description of the video. You can still see the video playing underneath this overlay.',
        },
        {
            videoSrc: bgVideo3,
            title: 'Video Title Text',
            description: 'Here is a short description of the video. You can still see the video playing underneath this overlay.',
        },
        {
            videoSrc: bgVideo4,
            title: 'Video Title Text',
            description: 'Here is a short description of the video. You can still see the video playing underneath this overlay.',
        },
        // Add more videos as needed
    ];

    return (
        <div className="vidContainer">
            {/* Mapping over the array of videos */}
            {videos.map((video, index) => (
                <HoverVideoPlayer
                    key={index} // Providing unique key for each video
                    className="items video"
                    videoSrc={video.videoSrc}
                    videoStyle={{
                        width: '100%',
                        height: '650px',
                    }}
                    // Paused overlay when video is not playing
                    pausedOverlay={
                        <div>
                            <img
                                src="thumbnail-image.jpg"
                                alt=""
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                            <div className="videoTitle">
                                <p className="title">{video.title}</p>
                            </div>
                        </div>
                    }
                    // Hover overlay displayed when hovering over the video
                    hoverOverlay={
                        <div className="hover-overlay">
                            <p className="title">{video.title}</p>
                            <p>{video.description}</p>
                            <button className="btn">Read more</button>
                        </div>
                    }
                />
            ))}
        </div>
    );
}

export default VideoPlayCards;
