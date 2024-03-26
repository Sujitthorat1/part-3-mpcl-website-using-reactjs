import React, { useEffect, useRef } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './scrollingCards.scss';
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from 'react-icons/bs';

import img1 from '../../assets/img/mpcl/HPC.jpg';
import img2 from '../../assets/img/mpcl/AI.jpg';
import img3 from '../../assets/img/mpcl/dataScience.jpg';
import img4 from '../../assets/img/mpcl/data_protection.jpg';
import img5 from '../../assets/img/mpcl/dataCenter.jpg';
import img6 from '../../assets/img/mpcl/encryption.jpg';

const Data = [
    {
        id: 1,
        imgSrc: img1,
        serviceTitle: 'HPC',
        location: 'Mumbai',
        grade: 'HPC',
    },
    {
        id: 2,
        imgSrc: img2,
        serviceTitle: 'HPC',
        location: 'Mumbai',
        grade: 'HPC',
    },
    {
        id: 3,
        imgSrc: img3,
        serviceTitle: 'HPC',
        location: 'Mumbai',
        grade: 'HPC',
    },
    {
        id: 4,
        imgSrc: img4,
        serviceTitle: 'HPC',
        location: 'Mumbai',
        grade: 'HPC',
    },
    {
        id: 5,
        imgSrc: img5,
        serviceTitle: 'HPC',
        location: 'Mumbai',
        grade: 'HPC',
    },
    {
        id: 6,
        imgSrc: img6,
        serviceTitle: 'HPC',
        location: 'Mumbai',
        grade: 'HPC',
    },
];

const ScrollingCards = () => {
    const cardContainerRef = useRef(null);

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    const handleScroll = (direction) => {
        const container = cardContainerRef.current;

        if (container) {
            const scrollAmount = direction === 'right' ? container.offsetWidth : -container.offsetWidth;
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="popular section ">
            <div className="secContainer container">
                <div className="secHeader flex">
                    <div className="textDiv">
                        <h2 className="secTitle">Popular services</h2>
                        <p>Whatever IT takes services, We offer High-performance computing and data analytics solutions to businesses of all sizes.</p>
                    </div>
                    <div className="iconsDiv flex">
                        <BsArrowLeftShort className="icon leftIcon" onClick={() => handleScroll('left')} />
                        <BsArrowRightShort className="icon" onClick={() => handleScroll('right')} />
                    </div>
                </div>
                <div className="mainContent" ref={cardContainerRef}>
                    {Data.map(({ id, imgSrc, serviceTitle }) => (
                        <div key={id} className="singleDestination">
                            <div className="destImage">
                                <img src={imgSrc} alt="Image title" />
                                <div className="overlayInfo">
                                    <h3>{serviceTitle}</h3>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <BsArrowRightShort className="icon" />
                                </div>
                            </div>
                            <div className="destFooter">
                                <div className="number">0{id}</div>
                                <div className="destText flex">
                                    <h6>India</h6>
                                    <span className="flex">
                                        <span className="dot"><BsDot className="icon" /></span>
                                        Dot
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ScrollingCards;
