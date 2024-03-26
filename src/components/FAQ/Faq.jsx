// Faq.jsx
import React, { useState, useEffect } from 'react';
import './faq.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'boxicons/css/boxicons.min.css';

const Faq = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    const [isExpanded, setIsExpanded] = useState([]);

    const handleToggle = (index) => {
        const newIsExpanded = [...isExpanded];
        newIsExpanded[index] = !newIsExpanded[index];
        setIsExpanded(newIsExpanded);
    };

    return (
        <div className="faqContainer">
            <div id="faq" className="faq section-bg container">
                <div >
                    <div className="section-title">
                        <h2 data-aos="fade-right">F.A.Q</h2>
                        <p data-aos="fade-left">Innovative Solutions for High-Performance Computing and Data Science Challenges</p>
                    </div>

                    <div className="faq-list">
                        <ul>
                            {faqData.map((item, index) => (
                                <li key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                                    <a
                                        onClick={() => handleToggle(index)}
                                        className={`collapse ${isExpanded[index] ? 'show' : ''}`}
                                    > <i className="bx bx-help-circle icon-help"></i>
                                        {item.question}
                                        <i className={`bx ${isExpanded[index] ? 'bx-chevron-up' : 'bx-chevron-down'} icon-show`}></i>
                                    </a>
                                    <div id={`faq-list-${index}`} className={`collapse ${isExpanded[index] ? 'show' : ''}`} data-bs-parent=".faq-list">
                                        <div className='answer'>

                                            <p>{item.answer}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const faqData = [
    {
        question: "Data center capabilities for reliable operations?",
        answer: "Absolutely. Our data centers are designed with advanced non-consectetur features, guaranteeing optimal performance and reliability in every aspect of operation."
    },
    {
        question: "Data center capabilities for reliable operations?",
        answer: "Absolutely. Our data centers are designed with advanced non-consectetur features, guaranteeing optimal performance and reliability in every aspect of operation."
    },
    {
        question: "Data center capabilities for reliable operations?",
        answer: "Absolutely. Our data centers are designed with advanced non-consectetur features, guaranteeing optimal performance and reliability in every aspect of operation."
    },
    {
        question: "Data center capabilities for reliable operations?",
        answer: "Absolutely. Our data centers are designed with advanced non-consectetur features, guaranteeing optimal performance and reliability in every aspect of operation."
    },
    {
        question: "Data center capabilities for reliable operations?",
        answer: "Absolutely. Our data centers are designed with advanced non-consectetur features, guaranteeing optimal performance and reliability in every aspect of operation."
    },
    // Add more FAQ items as needed
];

export default Faq;
