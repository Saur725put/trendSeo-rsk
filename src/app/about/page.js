import React from 'react';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import AboutHeader from '@/components/About/AboutHeader';
import WhoWeAre from '@/components/About/WhoWeAre';
import OurTeam from '@/components/About/Ourteam';
import Ourteam2 from '@/components/About/Ourteam2';
import Ourteam3 from '@/components/About/Ourteam3';

export default function About() {
  return (
    <>
      <AboutHeader />
      <WhoWeAre />
      {/* <OurTeam /> */}
      <Ourteam2 />
      {/* <Ourteam3 /> */}
    </>
  );
}