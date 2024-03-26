import React from 'react'

const Location = () => {
    return (
        <div className="location container">
            <h1>Location</h1>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30157.43913937931!2d72.863172!3d19.121694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c825839d81ad%3A0x727914f952af4dda!2sMicropoint%20Computers%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1710486685674!5m2!1sen!2sin"
                width="100%"
                height="404px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>
        </div>

    )
}

export default Location
