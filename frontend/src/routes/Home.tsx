import React from 'react';
import Hero from '../features/Daryl/Hero';
import Listings from '../features/Daryl/Listing';
import Client from '../features/Daryl/Client';
import AboutUs from '../features/Daryl/AboutUs';

const Home = () => {
  return (
    <div>
    {/*Hero*/}
      <Hero/>
    {/*Listings*/}
      <Listings/>
    {/*Client Feedback*/}
      <Client/>
    {/*About*/}
      <AboutUs/>
    </div>
  )
}

export default Home
