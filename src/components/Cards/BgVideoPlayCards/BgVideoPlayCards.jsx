// BgVideoPlayCard.jsx

import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import PausedOverlay from "./PausedOverlay";
import './bgVideoPlayCards.scss'

const bigBuckBunnySrc =
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const BgVideoPlayCard = () => {
    return (
        <section className="videoCard">
            <div className="cardVid">
                <HoverVideoPlayer
                    videoSrc={bigBuckBunnySrc}
                    pausedOverlay={<PausedOverlay />}
                    hoverOverlayWrapperClassName="bgVideoPlayCardWrapper"
                    hoverOverlay={
                        <>
                            <h1>About</h1>
                            <p>
                                Big Buck Bunny is a free Creative Commons movie made by the Blender
                                Foundation.
                            </p>
                            <p>
                                <a
                                    href="https://peach.blender.org/about/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Click here to learn more
                                </a>
                            </p>
                        </>
                    }
                    autoplay // Make sure autoplay is set
                />
            </div>
            <div className="cardVid">
                <HoverVideoPlayer
                    videoSrc={bigBuckBunnySrc}
                    pausedOverlay={<PausedOverlay />}
                    hoverOverlayWrapperClassName="bgVideoPlayCardWrapper"
                    hoverOverlay={
                        <>
                            <h1>About</h1>
                            <p>
                                Big Buck Bunny is a free Creative Commons movie made by the Blender
                                Foundation.
                            </p>
                            <p>
                                <a
                                    href="https://peach.blender.org/about/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Click here to learn more
                                </a>
                            </p>
                        </>
                    }
                />
            </div>
            <div className="cardVid">
                <HoverVideoPlayer
                    videoSrc={bigBuckBunnySrc}
                    pausedOverlay={<PausedOverlay />}
                    hoverOverlayWrapperClassName="bgVideoPlayCardWrapper"
                    hoverOverlay={
                        <>
                            <h1>About</h1>
                            <p>
                                Big Buck Bunny is a free Creative Commons movie made by the Blender
                                Foundation.
                            </p>
                            <p>
                                <a
                                    href="https://peach.blender.org/about/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Click here to learn more
                                </a>
                            </p>
                        </>
                    }
                />
            </div>
            <div className="cardVid">
                <HoverVideoPlayer
                    videoSrc={bigBuckBunnySrc}
                    pausedOverlay={<PausedOverlay />}
                    hoverOverlayWrapperClassName="bgVideoPlayCardWrapper"
                    hoverOverlay={
                        <>
                            <h1>About</h1>
                            <p>
                                Big Buck Bunny is a free Creative Commons movie made by the Blender
                                Foundation.
                            </p>
                            <p>
                                <a
                                    href="https://peach.blender.org/about/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Click here to learn more
                                </a>
                            </p>
                        </>
                    }
                />
            </div>
        </section>
    );
};

export default BgVideoPlayCard;
