import React from 'react'
import heroimg from '../../assets/banner.jpg'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative">
      <div className="h-[500px] relative">
        <img
          src={heroimg}
          alt=""
          className="w-full h-full object-cover rounded-md relative"
        />

        {/* Blur overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Blur container for the search bar with increased padding */}
          <div className="bg-black bg-opacity-40 backdrop-filter backdrop-blur-md p-8 rounded-md mx-auto w-full max-w-xl text-center">
            {/* Text above the search bar */}
            <p className="text-white text-xl font-bold mb-4">Start your property search here</p>

            {/* Buttons with space in between */}
            <div className="flex space-x-4">
              <button className="flex-1 bg-white hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-md text-black">Manage your Properties</button>
              <Link to="/listings"><button className="flex-1 bg-white hover:bg-blue-500 hover:text-black px-4 py-2 rounded-md text-black">Rent Properties</button></Link>
            </div>

            {/* Search bar */}
            <div className="relative mt-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none bg-transparent text-white placeholder-white"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute top-1/2 right-4 transform -translate-y-1/2 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Hero
