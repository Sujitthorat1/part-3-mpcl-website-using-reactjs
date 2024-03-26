import React from "react";
import './Career.scss'
import SubBanner from "../SubBanner/SubBanner";
import logo from '../../assets/img/mpcl/VDI.jpg'
import SentJobDetails from "./SentJobDetails";
import CurrentOpening from "./CurrentOpening";
const ContactUs = () => {

    return (
        <>

            <SubBanner heading={"Career page"} subHeading={"Home/career"} img={logo} />
            <CurrentOpening />
            
            <SentJobDetails />
        </>

    )

}

export default ContactUs;
