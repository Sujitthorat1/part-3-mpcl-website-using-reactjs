import React, { useState, useEffect } from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import logo from "../../assets/img/mpcl/mpcl-logo.png";

const NavbarMain = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showInvestors, setShowInvestors] = useState(false);
  const [activeNav, setActiveNav] = useState([true, false, false, false]);

  const closeNav = () => {
    setShowAbout(false);
    setShowService(false);
    setShowInvestors(false);
  };

  const showAboutDropdown = () => {
    setShowAbout(true);
  };

  const hideAboutDropdown = () => {
    setShowAbout(false);
  };

  const showServiceDropdown = () => {
    setShowService(true);
  };

  const hideServiceDropdown = () => {
    setShowService(false);
  };

  const showInvestorsDropdown = () => {
    setShowInvestors(true);
  };

  const hideInvestorsDropdown = () => {
    setShowInvestors(false);
  };

  useEffect(() => {
    if (sessionStorage.getItem("NavbarMain") != null) {
      let temp = JSON.parse(sessionStorage.getItem("NavbarMain"));
      setActiveNav([...temp]);
    }
  }, []);

  const handleActiveNav = (i) => {
    let temp = activeNav;
    temp = temp.map((x) => (x = false));
    temp[i] = true;
    setActiveNav([...temp]);
    sessionStorage.setItem("NavbarMain", JSON.stringify(temp));
  };

  return (
    <>
      <Navbar
        style={{
          backgroundColor: "white",
          boxShadow: "1px 1px 10px rgb(0 0 0 / 0.4)",
        }}
        variant="light"
        expand="lg"
        sticky="top"
        onToggle={() => { closeNav() }}
      >

        <Container >
          <Navbar.Brand href="/" className={styles.lo}>
            <img src={logo} alt="mpcl-log.png" className={styles.imageLogo} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: 'auto' }}>
              <NavLink
                to="/"
                className={`${styles.nav_text} nav-link ${activeNav[0] ? styles.active : ""}`}
                style={{ marginTop: "8px" }}
                onClick={() => { handleActiveNav(0); closeNav() }}
              >
                Home
              </NavLink>

              {/* Gallery */}
              <NavLink
                to="/gallery"
                className={`${styles.nav_text} nav-link ${activeNav[3] ? styles.active : ""}`}
                style={{ marginTop: "8px" }}
                onClick={() => { handleActiveNav(3); closeNav() }}
              >
                Gallery
              </NavLink>
              {/* Contact us */}
              <NavLink
                to="/contactUs"
                className={`${styles.nav_text} nav-link ${activeNav[4] ? styles.active : ""}`}
                style={{ marginTop: "8px" }}
                onClick={() => { handleActiveNav(4); closeNav() }}
              >
                Contact Us
              </NavLink>
              {/* About us */}
              <NavDropdown
                show={showAbout}
                onMouseEnter={showAboutDropdown}
                onMouseLeave={hideAboutDropdown}
                className={`nav-link ${styles.drop} `}
                title={
                  <Link to="/about" style={{ textDecoration: 'none' }} className={styles.dropicon} onClick={() => { handleActiveNav(1); closeNav() }}>
                    <span className={`${styles.nav_text} my-auto ${activeNav[1] ? styles.active : ""}`}>
                      About
                    </span>
                  </Link>
                }
                id="basic-nav-dropdown-about"
              >
                <NavDropdown.Item className={styles.dropdownItem}><Link to="/about/team" onClick={() => { handleActiveNav(1); closeNav() }} className={styles.dropdownText}>Team</Link></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><Link to="/about/history" onClick={() => { handleActiveNav(1); closeNav() }} className={styles.dropdownText}>History</Link></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><Link to="/about/career" onClick={() => { handleActiveNav(1); closeNav() }} className={styles.dropdownText}>Career</Link></NavDropdown.Item>

              </NavDropdown>

              {/* Services */}
              <NavDropdown
                show={showService}
                onMouseEnter={showServiceDropdown}
                onMouseLeave={hideServiceDropdown}
                className={`nav-link ${styles.drop}`}
                title={
                  <Link to="/services" style={{ textDecoration: 'none' }} className={styles.dropicon} onClick={() => { handleActiveNav(2); closeNav() }}>
                    <span className={`${styles.nav_text} my-auto ${activeNav[2] ? styles.active : ""}`}>
                      Services
                    </span>
                  </Link>
                }
                id="basic-nav-dropdown-service"
              >
                <NavDropdown.Item className={styles.dropdownItem}><Link to="/services/ai" onClick={() => { handleActiveNav(2); closeNav() }} className={styles.dropdownText}> Artificial Intelligence</Link></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><Link to="/services" onClick={() => { handleActiveNav(2); closeNav() }} className={styles.dropdownText}> Big data</Link></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><Link to="/services" onClick={() => { handleActiveNav(2); closeNav() }} className={styles.dropdownText}> Accessories</Link></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><Link to="/services" onClick={() => { handleActiveNav(2); closeNav() }} className={styles.dropdownText}> Data Center </Link></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><Link to="/services" onClick={() => { handleActiveNav(2); closeNav() }} className={styles.dropdownText}> Data Encryption & Key Management Solution</Link></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><Link to="/services" onClick={() => { handleActiveNav(2); closeNav() }} className={styles.dropdownText}> Data Protection & Disaster Management </Link></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><Link to="/services" onClick={() => { handleActiveNav(2); closeNav() }} className={styles.dropdownText}> Data Science platform</Link></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><Link to="/services" onClick={() => { handleActiveNav(2); closeNav() }} className={styles.dropdownText}> FMS</Link></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><Link to="/services" onClick={() => { handleActiveNav(2); closeNav() }} className={styles.dropdownText}> GPA & FPGA Solutions</Link></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><Link to="/services" onClick={() => { handleActiveNav(2); closeNav() }} className={styles.dropdownText}> HPC</Link></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><Link to="/services" onClick={() => { handleActiveNav(2); closeNav() }} className={styles.dropdownText}> Hyper Convergence</Link></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><Link to="/services" onClick={() => { handleActiveNav(2); closeNav() }} className={styles.dropdownText}> Infrastructure Consolidation </Link></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><Link to="/services" onClick={() => { handleActiveNav(2); closeNav() }} className={styles.dropdownText}> NVIDIA</Link></NavDropdown.Item>

                {/* ... (other dropdown items) */}
              </NavDropdown>


              {/* Investors */}
              <NavDropdown
                show={showInvestors}
                onMouseEnter={showInvestorsDropdown}
                onMouseLeave={hideInvestorsDropdown}
                className={`nav-link ${styles.drop}`}
                title={
                  <Link to="/" style={{ textDecoration: 'none' }} className={styles.dropicon} onClick={() => { handleActiveNav(5); closeNav() }}>
                    <span className={`${styles.nav_text} my-auto ${activeNav[5] ? styles.active : ""}`}>
                      Investors
                    </span>
                  </Link>
                }
                id="basic-nav-dropdown-investors"
              >
                <NavDropdown.Item className={styles.dropdownItem}><Link to="/investors/policies" onClick={() => { handleActiveNav(5); closeNav() }} className={styles.dropdownText}>Policies</Link></NavDropdown.Item>
                <NavDropdown.Item className={styles.dropdownItem}><Link to="/investors/annulReturns" onClick={() => { handleActiveNav(5); closeNav() }} className={styles.dropdownText}>Annual returns</Link></NavDropdown.Item>

              </NavDropdown>



            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMain;


/*
import React, { useState } from 'react';
import './navbar.scss';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import logo from '../../assets/img/mpcl/mpcl-black-logo.png';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  const [active, setActive] = useState('navBar');
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  const closeNav = () => {
    setActive('navBar');
    setShowAboutDropdown(false); // Close dropdown when closing the navbar
  };

  const toggleAboutDropdown = () => {
    setShowAboutDropdown((prev) => !prev);
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDev">
          <Link Link="/" className="logo flex">
            <img src={logo} className="logoIcon" alt="mpcl-logo" />
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="/" className={`navLink`}>
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link to="/" className="navLink " onClick={toggleAboutDropdown}>
                About MPCL
              </Link>
              {showAboutDropdown && (
                <div className="aboutDropdown">
                
                  <NavLink to="/aboutMpcl/about">About</NavLink>
                  <NavLink to="/aboutMpcl/gallery">Gallery</NavLink>

                  <Link href="#">Annual Return</Link>
                  <Link href="#">Artificial Intelligence</Link>
                  <Link href="#">Big Data</Link>
                  <Link href="#">Gallery</Link>
             
                  <Link href="#">Data Encryption and Key Management Solutions</Link>
                  <Link href="#">Data Protection and Disaster Management</Link>
                  <Link href="#">Data Science Platform</Link>
                  <Link href="#">Enquire Now</Link>
                  <Link href="#">FMS</Link>
                  <Link href="#">Build</Link>
                  <Link href="#">GPU and FPGA Solutions</Link>
                  <Link href="#">Introduction NVIDIA Offerings</Link>
                  <Link href="#">Investors </Link>
                  <Link href="#">Large Scale IT asset roll-out</Link>
                  <Link href="#">MGT-7 22-23</Link>
                  <Link href="#">Networking and Security Solutions</Link>
                </div>
              )}
            </li>
            <li className="navItem">
              <NavLink to="/career" className="navLink">
                Career
              </NavLink>
            </li>
            <li className="navItem">
              <Link to="/services" className="navLink">
                Services
              </Link>
            </li>
            <li className="navItem">
              <Link href="#" className="navLink">
                Contact US
              </Link>
            </li>
            <li className="navItem">
              <button className="btn">
                <Link href="/blog" className='navLink'>BLOG</Link>
              </button>
            </li>
          </ul>

          <div onClick={closeNav} className="closeNavbar ">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;

*/