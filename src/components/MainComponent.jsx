import React from 'react';
import Header from './Header';
import Hero from './Hero';
import LatestWorks from './LatestWorks';
import LatestWorksPage from './LatestWorksPage';
import ParticlesComponent from './Particles';

const MainComponent = () => {
  return (
    <div className="flex flex-col h-[80vh] sm:h-screen justify-between">
      {/* <ParticlesComponent /> */}
        <Header />
        <Hero />
        <LatestWorks/>
        {/* <LatestWorksPage/> */}
      </div>
  )
}

export default MainComponent;
