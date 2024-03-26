import React, { useEffect } from 'react';
import './cards.scss'
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from 'react-icons/bs'
import img1 from '../../assets/img/mpcl/HPC.jpg'
import img from '../../assets/img/mpcl/HPC.jpg'
import img2 from '../../assets/img/mpcl/AI.jpg'
import img3 from '../../assets/img/mpcl/dataScience.jpg'
import img4 from '../../assets/img/mpcl/data_protection.jpg'
import img5 from '../../assets/img/mpcl/dataCenter.jpg'
import img6 from '../../assets/img/mpcl/encryption.jpg'

import Aos from 'aos';
import 'aos/dist/aos.css';


const Data = [
    {
        id: 1,
        imgSrc: img1,
        serviceTitle: 'HPC',
        location: "Mumbai",
        grade: 'HPC',
    },
    {
        id: 2,
        imgSrc: img2,
        serviceTitle: 'HPC',
        location: "Mumbai",
        grade: 'HPC',
    },
    {
        id: 3,
        imgSrc: img3,
        serviceTitle: 'HPC',
        location: "Mumbai",
        grade: 'HPC',
    },
    {
        id: 4,
        imgSrc: img4,
        serviceTitle: 'HPC',
        location: "Mumbai",
        grade: 'HPC',
    },
    {
        id: 5,
        imgSrc: img5,
        serviceTitle: 'HPC',
        location: "Mumbai",
        grade: 'HPC',
    },
    {
        id: 6,
        imgSrc: img6,
        serviceTitle: 'HPC',
        location: "Mumbai",
        grade: 'HPC',
    },
]
const Cards = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section className='popular section container'>
            <div className="secContainer">
                <div className="secHeader flex">
                    <div data-aos='fade-right' data-aos-duration="2500" className="textDiv">
                        <h2 className="secTitle">
                            Popular services
                        </h2>

                        <p>
                            Whatever IT takes services, We offer High performance computing
                            and data analytics solutions to businesses of all  sizes .

                        </p>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="2500" className="iconsDiv flex">
                        <BsArrowLeftShort className='icon leftIcon' />

                        <BsArrowRightShort className='icon' />

                    </div>
                </div>

                <div className="mainContent grid">
                    {
                        Data.map(({ id, imgSrc, serviceTitle, location, grade }) => {
                            return (
                                <div data-aos="fade-up" className="singleDestination">
                                    <div className="destImage">
                                        <img src={imgSrc} alt="Image title" />

                                        <div className="overlayInfo">
                                            <h3>{serviceTitle}</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet.
                                            </p>

                                            <BsArrowRightShort className='icon' />
                                        </div>
                                    </div>

                                    <div className="destFooter">
                                        <div className="number">
                                            0{id}
                                        </div>
                                        <div className="destText flex">
                                            <h6>
                                                India
                                            </h6>
                                            <span className="flex">
                                                <span className='dot'>
                                                    <BsDot className='icon' />

                                                </span>
                                                Dot
                                            </span>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Cards;