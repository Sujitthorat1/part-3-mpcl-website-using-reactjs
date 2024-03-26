import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import './footer.scss';

import video from '../../assets/img/mpcl/bg-vid.mp4';
import { FiChevronRight, FiSend } from 'react-icons/fi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'



const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} muted autoPlay loop type='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Stay Connected With us</h2>
          </div>


          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button className="btn flex" data-aos="fade-up" type='submit'>
              SEND <FiSend className='icon' />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a to="/" className='logo flex '>
                MPCL .
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Assumenda quam nostrum
              blanditiis quaerat. Dolorum repellat iste
              sed facere culpa aliquid aut adipisci,
              aperiam explicabo.
            </div>

            <div data-aos="fade-up" className='footerSocials flex'>
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group first */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                OUR COMPANY
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Data center
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Def
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Network
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                HPC
              </li>

            </div>
            {/* Group second */}
            <div data-aos="fade-up"
              data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                Address 1
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Data center
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Def
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Network
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                HPC
              </li>

            </div>
            {/* Group  third */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                Address 2
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Data center
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Def
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Network
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                HPC
              </li>

            </div>
            {/* Group  fourth */}
            <div data-aos="fade-up"
              data-aos-duration="6000" className="linkGroup">
              <span className="groupTitle">
                Address 3
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Data center
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Def
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Network
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                HPC
              </li>

            </div>
          </div>


          <div className="footerDiv flex">
            <small>BEST SERVICE PROVIDER</small>

            <small>MPCL© 2024 All rights reserved</small>
          </div>



        </div>

      </div>
    </section>
  )
}

export default Footer
