import React from 'react'
import Header from './Header'
import Hero from './Hero'
import LatestWorks from './LatestWorks'

const MainComponent = () => {
  return (
    <div className="flex flex-col h-[80vh] sm:h-screen justify-between">
        <Header />
        <Hero />
        <LatestWorks/>
      </div>
  )
}

export default MainComponent;
