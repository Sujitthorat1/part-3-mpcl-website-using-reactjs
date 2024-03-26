import React, { useEffect } from 'react';
import './aboutTop.scss';
import img from '../../../assets/img/mpcl/AI.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';

const BgVideo = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="BgVideo">
            <div className="overlay"></div>

            {/* <video src={bgVideo} muted autoPlay loop type="video/mp4"></video>
       */}

            <img src={img} alt="bImg" />
            <div className="BgVideoContent container">
                <div className="textDiv">
                    <h1 data-aos="slide-right" className="BgVideoTitle">
                        ABOUT US
                    </h1>
                    <span className="smallText">

                        <p data-aos="slide-left">
                            MPCL offers solutions for customers across many verticals. We combine state of the art IT
                            products, project roll-out skills and our infrastructure management services and thereby
                            cover entire lifecycle of your IT setup.
                        </p>

                    </span>
                    <br />

                </div>
            </div>

        </section>
    );
};

export default BgVideo;
