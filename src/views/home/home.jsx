import React from 'react'
import Navbar from '../../components/Header/Navbar'
import BgVideo from '../../components/Home/BgVideo/BgVideo'
import ScrollingCards from '../../components/ScrollingCards/ScrollingCards'
import Footer from '../../components/Footer/Footer'
import MainBody from '../../components/Mainbody/MainBody'
import Directors from '../../components/Directors/Directors'
import Client from '../../components/Client/ClientSlider'
import CaseStudy from '../../components/CaseStudy/CaseStudy'
import Testimonial from '../../components/Testimonial/Testimonial'
import Faq from '../../components/FAQ/Faq'



const home = () => {
    return (
        <>
            <Navbar />
            <BgVideo />
            <ScrollingCards />
            <CaseStudy />
            <MainBody />
            <Directors />
            <Client />
            <Testimonial />
            <Faq/>
            <Footer />
        </>
    )
}

export default home
