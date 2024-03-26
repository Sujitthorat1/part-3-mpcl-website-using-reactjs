import React, { useEffect } from 'react';
import './mainbody.scss';
import img1 from '../../assets/img/mpcl/AI.jpg';
import img2 from '../../assets/img/mpcl/dataCenter.jpg';
import img3 from '../../assets/img/mpcl/HPC.jpg';
import img4 from '../../assets/img/mpcl/networking.jpg';
import img5 from '../../assets/img/mpcl/infrastructure.jpg';
import img6 from '../../assets/img/mpcl/data_protection.jpg';
import img7 from '../../assets/img/mpcl/encryption.jpg';
import img8 from '../../assets/img/mpcl/totalOutSourcing.jpg';
import img9 from '../../assets/img/mpcl/VDI.jpg';
// import img10 from '../../assets/img/mpcl/software.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Data = [
  {
    id: 1,
    imgSrc: img1,
    serviceTitle: "AI",
    description: `HPC Cluster deploy, 
           manage and fine-tune.We Micropoint are one of the
           leading system integrator providing solutions We acquired in the year Dec 2014,
           Utilities and tools, services, training, and turn- key solutions`,
  },
  {
    id: 2,
    imgSrc: img2,
    serviceTitle: "Data Center",
    description: `HPC Cluster deploy, 
           manage and fine-tune.We Micropoint are one of the
           leading system integrator providing solutions We acquired in the year Dec 2014,
           Utilities and tools, services, training, and turn- key solutions`,
  }, {
    id: 3,
    imgSrc: img3,
    serviceTitle: "HPC",
    description: `HPC Cluster deploy, 
           manage and fine-tune.We Micropoint are one of the
           leading system integrator providing solutions We acquired in the year Dec 2014,
           Utilities and tools, services, training, and turn- key solutions`,
  },
  {
    id: 4,
    imgSrc: img4,
    serviceTitle: "Networking",
    description: `HPC Cluster deploy, 
           manage and fine-tune.We Micropoint are one of the
           leading system integrator providing solutions We acquired in the year Dec 2014,
           Utilities and tools, services, training, and turn- key solutions`,
  }, {
    id: 5,
    imgSrc: img5,
    serviceTitle: "Infrastructure",
    description: `HPC Cluster deploy, 
           manage and fine-tune.We Micropoint are one of the
           leading system integrator providing solutions We acquired in the year Dec 2014,
           Utilities and tools, services, training, and turn- key solutions`,
  },

  {
    id: 6,
    imgSrc: img6,
    serviceTitle: "Data Protection",
    description: `HPC Cluster deploy, 
           manage and fine-tune.We Micropoint are one of the
           leading system integrator providing solutions We acquired in the year Dec 2014,
           Utilities and tools, services, training, and turn- key solutions`,
  },

  {
    id: 7,
    imgSrc: img7,
    serviceTitle: "Encryption",
    description: `HPC Cluster deploy, 
           manage and fine-tune.We Micropoint are one of the
           leading system integrator providing solutions for HPC environment
           in India.We acquired Hinditron in the year Dec 2014,
           then the number 1 HPC player in the country to augment our skills.
           These include workstations, GPU accelerated systems, clusters of various sizes,
           Utilities and tools, services, training, and turn- key solutions`,
  },
  {
    id: 8,
    imgSrc: img8,
    serviceTitle: "Total Out solution",
    description: `HPC Cluster deploy, 
           manage and fine-tune.We Micropoint are one of the
           leading system integrator providing solutions for HPC environment
           in India.We acquired Hinditron in the year Dec 2014,
           then the number 1 HPC player in the country to augment our skills.
           These include workstations, GPU accelerated systems, clusters of various sizes,
           Utilities and tools, services, training, and turn- key solutions`,
  },
  {
    id: 9,
    imgSrc: img9,
    serviceTitle: "VID",
    description: `HPC Cluster deploy, 
           manage and fine-tune.We Micropoint are one of the
           leading system integrator providing solutions for HPC environment
           in India.We acquired Hinditron in the year Dec 2014,
           then the number 1 HPC player in the country to augment our skills.
           These include workstations, GPU accelerated systems, clusters of various sizes,
           Utilities and tools, services, training, and turn- key solutions`,
  },
  // {
  //   id: 10,
  //   imgSrc: img10,
  //   serviceTitle: "Software",
  //   description: `HPC Cluster deploy, 
  //          manage and fine-tune.We Micropoint are one of the
  //          leading system integrator providing solutions for HPC environment
  //          in India.We acquired Hinditron in the year Dec 2014,
  //          then the number 1 HPC player in the country to augment our skills.
  //          These include workstations, GPU accelerated systems, clusters of various sizes,
  //          Utilities and tools, services, training, and turn- key solutions`,
  // },
];

const MainBody = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (

    <div className="popuLarServices">
      <div className="main container section">
        <div className="secTitle">
          <p data-aos="fade-right" className="title">
            Our Main Services
          </p>
        </div>

        <div className="secContent grid">
          {
            Data.map(({ id, imgSrc, serviceTitle, description }) => {
              return (
                <div key={id}
                  data-aos="fade-up" className="singleDestination">
                  <div className="imageDiv">
                    <img src={imgSrc} alt={serviceTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="serviceTitle">
                      {serviceTitle}
                    </h4>
                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className="btn flex">
                      <Link to="/services/ai">DETAILS</Link>
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>


      </div>
    </div>
  )
}

export default MainBody

