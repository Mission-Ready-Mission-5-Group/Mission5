import React from 'react';
import Hero from '../features/Daryl/Hero';
import Listings from '../features/Daryl/Listing';
import Client from '../features/Daryl/Client';
import AboutUs from '../features/Daryl/AboutUs';

const Home = () => {
  return (
    <div className='bg-white'>
    {/*Hero*/}
      <Hero/>
    <div className='container mx-auto text-black'>
    {/*Listings*/}
      <Listings/>
    {/*Client Feedback*/}
      <Client/>
    {/*About*/}
      <AboutUs/>
    </div>
    </div>
  )
}

export default Home
