import React from 'react';
import './currentOpening.scss';

const Opening = ({ title, experience, vacancies, description, prerequisite, salary }) => (
    <div className="openingCard">
        <div className="careerOpenings">
            <h2>{title}</h2>
            <h6><b>Experience:</b> {experience}</h6>
            <h6><b>Salary:</b> {salary}</h6>

            <h6><b>Vacancies:</b> {vacancies}</h6>
            <ul>
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        <div className="prerequisite">
            <h2>Pre requisites</h2>
            <h6><b>Qualification:</b> {prerequisite.qualification}</h6>
            <h6><b>Experience:</b> {prerequisite.experience}</h6>
            <h6><b>Location:</b> {prerequisite.location}</h6>
            <button type="button" className="btn">APPLY NOW</button>
        </div>
    </div>
);

const CurrentOpening = () => {
    const openingsData = [
        {
            title: 'Flutter Developer',
            experience: '1-5 yrs',
            salary: '50LPA',
            vacancies: 3,
            description: [
                'Managing Enterprise/SMB/Mid-size ACCOUNTS for Server / Storage Security/Software.',
                'Handling End-to-End IT sales for Server, Storage, Software and Networking Solutions.',
                'Assessing clients pain areas and requirements, followed by technical discussion with clients/consultant.',
                'Ensuring recurring business to flow from existing accounts and performing key account management.',
                'Development of new accounts and nourishment of the account in all domains.',
                'Coordinating with OEM’s for strategically targeting new accounts and ensuring closures before deadlines.',
                'Up-selling and maintaining relations for a long-lasting business partnership.',
                'Generating leads from existing accounts.'
            ],
            prerequisite: {
                qualification: 'Any Graduate',
                experience: '1-5 yrs',
                location: 'Mumbai'
            }
        },
        {
            title: 'Software Development Executive',
            experience: '1-5 yrs',
            vacancies: 3,
            description: [
                'Managing Enterprise/SMB/Mid-size ACCOUNTS for Server / Storage Security/Software.',
                'Handling End-to-End IT sales for Server, Storage, Software and Networking Solutions.',
                'Assessing clients pain areas and requirements, followed by technical discussion with clients/consultant.',
                'Ensuring recurring business to flow from existing accounts and performing key account management.',
                'Development of new accounts and nourishment of the account in all domains.',
                'Coordinating with OEM’s for strategically targeting new accounts and ensuring closures before deadlines.',
                'Up-selling and maintaining relations for a long-lasting business partnership.',
                'Generating leads from existing accounts.'
            ],
            prerequisite: {
                qualification: 'Any Graduate',
                experience: '1-5 yrs',
                location: 'Mumbai'
            }
        }
    ];

    return (
        <div className="currentOpenings">
            <div className="container openings">
                <hr />
                <h1>Home {'>'} Career</h1>
                <hr />
                <h2>Current Openings</h2>
                <hr />
                {openingsData.map((opening, index) => (
                    <React.Fragment key={index}>
                        <Opening {...opening} />
                        <hr />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default CurrentOpening;
