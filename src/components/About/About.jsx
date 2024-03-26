import React from 'react';
import TopSection from './top/AboutTop'
import AboutMidSection from './mid/AboutMidSection';
import Directors from '../../components/Directors/Directors';
import AboutChrono from './AboutChrono/AboutChrono';

const About = () => {

  return (
    <div>
      <TopSection />

      <AboutMidSection />
      <AboutChrono />
      <Directors />
    </div>
  );
};

export default About;
