import React from 'react';
import BgVideo from './BgVideo/BgVideo';
import Footer from '../Footer/Footer';
import ScrollingCards from '../ScrollingCards/ScrollingCards';
import MainBody from '../Mainbody/MainBody';
import CaseStudy from '../CaseStudy';
import Directors from '../Directors/Directors';
import Client from '../Client/ClientSlider';
import Testimonial from '../Testimonial';
import Navbar from '../Header/Navbar';
import Faq from '../FAQ/Faq';
import BgVideoPlayCard from '../Cards/BgVideoPlayCards/BgVideoPlayCards';
import VideoPlayCards from '../Cards/VideoPlayCards/VideoPlayCards';

const Home = () => {
    return (
        <>
            {/* <Navbar /> */}
            <BgVideo />
            {/* <BgVideoPlayCard /> */}
            <VideoPlayCards />

            <CaseStudy />
            <ScrollingCards />
            <MainBody />
            <Directors />
            <Client />
            <Testimonial />
            <Faq />
            {/* <Footer /> */}
            {/* <BgVideoPlayCard /> */}
            {/* <ScrollingCards /> */}
            {/* <Cards/> */}
            {/* <MainBody /> */}
            {/* <CaseStudy />
            <Directors />
            <Client />
            <Testimonial />
            <Faq/>
            <Footer /> */}
        </>
    );
};

export default Home;
