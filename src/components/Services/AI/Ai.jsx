import React, { useEffect } from 'react';
import './ai.scss'
import Aos from 'aos';
import 'aos/dist/aos.css';
import SubBanner from '../../SubBanner/SubBanner';
import bg from '../../../assets/img/mpcl/AI.jpg'
const data = [

  {
    title: 'Who we are ?',
    content: `
      Micropoint Computers Pvt. Ltd. (MPCL) is one of India’s leading IT Infrastructure Solutions and Services Company. We are an ISO 9001:2015 certified with more than 3 decades of presence.
      We are a team of 700+ skilled personnel. The management team carries a combined average technical experience of 20+ years.
    `,
  },
  {
    title: 'WHAT WE DO?',
    content: `
      MPCL offers solutions for customers across many verticals. We combine state of the art IT products, project roll-out skills and our infrastructure management services and thereby cover entire lifecycle of your IT setup.
    `,
  },
  {
    title: 'OUR OFFERINGS',
    content: `
      Our offerings include IT Infrastructure for data centre solutions covering Servers, Storage, Converged and Hyper-Converged infrastructure, Backup and Data Protection Solutions, Network & Security solutions, OS & middleware. We also offer solutions for end user computing (personal and virtual).

      For green-field projects, MPCL provides data centre build covering Power, cooling, passive setup. Security and allied protection.

      Customer looking forward to pursue new technologies like AI and ML can take advantage of “Data Science Platform”. The platform helps meet project timelines and accelerate application performance.

      As today, MPCL has rolled-out more than 50,000 end user devices and 5,000 servers across the country. Our service contracts cover large set of DC assets and end-user devices.

      We have a distribution division providing accessories for laptops and desktops from leading OEM such as HPI, Dell, Lenovo and Acer.
    `,
  },
  {
    title: 'OUR APPROACH',
    content: `
      MPCL offers solutions for customers across many verticals. We combine state of the art IT products, project roll-out skills and our infrastructure management services and thereby cover entire lifecycle of your IT setup.
    `,
  },
  {
    title: 'WHAT WE DO?',
    content: `
      MPCL offers solutions for customers across many verticals. We combine state of the art IT products, project roll-out skills and our infrastructure management services and thereby cover entire lifecycle of your IT setup.
    `,
  },
  {
    title: 'OUR TEAM',
    content: `
      Employees are our assets. MPCL can boast of having a very stable employee base. An employee spends consolidately multiple years with MPCL before moving to a much bigger organisation.
      We provide a highly flexible and open environment to the MPCL family members which results in flow of new ideas and infusion of new initiatives in the system.
    `,
  },

];

const Ai = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div >
        <SubBanner heading='Artificial Intelligence' subHeading='Services/Ai' img={bg} />
      </div>
      <div className='container aiService'>

        <h1 data-aos="slide-up">Artificial Intelligence</h1>
        < hr />
        {data.map((data, index) => (
          <div data-aos="slide-up" key={index}>
            <h2>{data.title}</h2>
            {data.content && <div><p>{data.content}</p></div>}
            < hr />
          </div>
        ))}


        <p data-aos="slide-up" className='lastText'>
          The trust and faith extended to us by our valued customers has accomplished our mission to Build, Manage, Operate and Innovate Technology for our customers. This we call the BMOI effect.
        </p>

      </div>
    </>

  );
}

export default Ai;
