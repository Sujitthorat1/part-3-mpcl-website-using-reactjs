import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './directors.scss';
import director1 from "../../assets/img/mpcl/directors/1.png";
import director2 from "../../assets/img/mpcl/directors/2.png";
import 'boxicons';

const Directors = () => {
    // Responsive configuration for the carousel
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <section id="testimonials" className="testimonials">
            <div className="container position-relative" data-aos="fade-up">
                <Carousel
                    responsive={responsive}
                    ssr
                    infinite
                    autoPlay
                    autoPlaySpeed={5000}
                    transitionDuration={500}
                    containerClass="testimonials-slider"
                    dotListClass="swiper-pagination"
                >
                    <div className="testimonial-item">
                        <img src={director1} className="testimonial-img" alt="" />
                        <h3>AMUL MAHALE</h3>
                        <h4>Co - Founder Director</h4>
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Born and brought up in Mumbai, Mr. Mahale completed his Digital Electronic Engineering in the year 1986. With
                            32 years of sales experience under his belt, his marketing strategies proved highly valuable to MPCL. His
                            focused approach has helped MPCL cement several long-lasting profitable relationships.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                    </div>

                    <div className="testimonial-item">
                        <img src={director2} className="testimonial-img" alt="" />
                        <h3>CHETAN GOYANI</h3>
                        <h4>Co - Founder Director</h4>
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            As a qualified Electronics Engineer, Mr. Goyani started work as an IT engineer. Backed with over 32 years of
                            experience in the IT industry, his expertise in providing Sales & Service Solutions to large corporate across
                            India paved the way for MPCL in its nascent days. His key strengths lie in Business Development.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default Directors;
