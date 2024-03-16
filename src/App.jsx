import React from 'react';
import NavigationMenu from './components/NavigationMenu';
import Homepage from './components/Homepage';
import Slider from './components/Slider';
import Intro from './components/Intro';
import EyesAnimated from './components/EyesAnimated';
import FeaturedProjects from './components/FeaturedProjects';
import Cards from './components/Cards';
import Contacts from './components/Contacts';
import LocomotiveScroll from 'locomotive-scroll';
function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
      <div className='w-full h-full  bg-black text-white'>
      <NavigationMenu />
      <Homepage />
      <Slider />
      <Intro />
      <EyesAnimated />
      <FeaturedProjects />
      <Cards />
      <Contacts/>
      </div>
  )
}

export default App;
