import React from 'react'
import ContactUs from '../../components/ContactUs/ContactUs'
import SubBanner from '../../components/SubBanner/SubBanner'
import bg from '../../assets/img/mpcl/contactUs.jpg'
import Location from '../../components/ContactUs/Location'
import Contact from '../../components/ContactUs/contact/Contact'

// import bg from 'https://www.mpcl.in/wp-content/uploads/2020/05/CONTACT-US-PAGE-BANNER.jpg'

const contactUs = () => {
    return (
        <>
            <SubBanner heading='Contact Us' subHeading='Home/Contact Us' img={bg} />
            <ContactUs />
            {/* <Contact /> */}


        </>
    )
}

export default contactUs
