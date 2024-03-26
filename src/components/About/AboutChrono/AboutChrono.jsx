import React from "react"
import { Chrono } from "react-chrono";
import './aboutChrono.scss'
const AboutChrono = () => {
    const items = [{
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
            type: "IMAGE",
            source: {
                url: "https://www.mpcl.in/wp-content/uploads/2020/05/HPC-2.jpg"
            }
        }
    },
    {
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
            type: "IMAGE",
            source: {
                url: "https://www.mpcl.in/wp-content/uploads/2020/05/HPC-2.jpg"
            }
        }
    },
    {
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
            type: "IMAGE",
            source: {
                url: "https://www.mpcl.in/wp-content/uploads/2020/05/HPC-2.jpg"
            }
        }
    },
    {
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
            type: "IMAGE",
            source: {
                url: "https://www.mpcl.in/wp-content/uploads/2020/05/HPC-2.jpg"
            }
        }
    },

    ];

    return (
        <div className="container chrono" style={{ width: "100vh", height: "100%" }}>
            <Chrono items={items} mode="VERTICAL_ALTERNATING" />

        </div>
    )
}

export default AboutChrono;