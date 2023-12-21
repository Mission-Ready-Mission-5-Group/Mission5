import React, { useState } from 'react';
import { BsSuitHeart } from 'react-icons/bs';
import { IoBedOutline, IoLocationOutline } from 'react-icons/io5';
import { GiBathtub, GiHomeGarage } from 'react-icons/gi';
import house2 from '../../assets/houses/house2.jpg';
import house3 from '../../assets/houses/house3.jpg';
import house4 from '../../assets/houses/house4.jpg';
import house5 from '../../assets/houses/house5.jpg';
import house6 from '../../assets/houses/house6.jpg';
import house7 from '../../assets/houses/house7.jpg';
import house8 from '../../assets/houses/house8.jpg';

interface ListingProps {
  image: string;
  bed: string;
  bath: string;
  garage: string;
  price: string;
  location: string;
}

const Listing: React.FC = () => {
  const [popUpVisible, setPopUpVisible] = useState(false);
  const [selectedListing, setSelectedListing] = useState<ListingProps | null>(null);

  const handleListingClick = (listing: ListingProps) => {
    setPopUpVisible(true);
    setSelectedListing(listing);
  };

  const handleClosePopUp = () => {
    setPopUpVisible(false);
    setSelectedListing(null);
  };

  const listings: ListingProps[] = [
    { image: house2, bed: '5', bath: '3', garage: '1', price: '$565', location: 'Henderson, Auckland' },
    { image: house3, bed: '5', bath: '3', garage: '1', price: '$620', location: 'Newmarket, Auckland' },
    { image: house4, bed: '5', bath: '3', garage: '1', price: '$500', location: 'Glenbrook, Waikato' },
    { image: house5, bed: '5', bath: '3', garage: '1', price: '$576', location: 'Ohaupo, Wellington' },
    { image: house6, bed: '5', bath: '3', garage: '1', price: '$537', location: 'Auckland CBD' },
    { image: house7, bed: '5', bath: '3', garage: '1', price: '$567', location: 'Papakura, Auckland' },
    { image: house8, bed: '5', bath: '3', garage: '1', price: '$645', location: 'Papakura, Auckland' },
    { image: house4, bed: '3', bath: '2', garage: '1', price: '$656', location: 'Hampton Downs, Waikato' },
  ];

  // Separate listings into two groups
  const group1Listings = listings.slice(0, 4); // First 4 listings
  const group2Listings = listings.slice(4);   // Remaining listings


  return (
    <div className='py-10 mx-auto'>
      <h1 className='text-2xl font-bold'>Featured Rentals under $700 in Auckland</h1>
      <div className="deals grid 2xl:grid-cols-5 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10">
        {group1Listings.map((listing, index) => (
          <div
            key={index}
            className={`deal h-[350px] bg-white drop-shadow-2xl rounded-xl transform transition-transform hover:scale-105 ${popUpVisible ? 'pointer-events-none' : ''}`}
            onClick={() => handleListingClick(listing)}
          >
            <div className='relative h-[60%]'>
              <img src={listing.image} alt="" className='w-full h-full object-cover rounded-t-xl' />
              <div className='absolute top-0 right-0 p-4'>
                <BsSuitHeart size={"1.5rem"} className="text-white" />
              </div>
            </div>
            <div className='p-4 space-y-4'>
              <div className='flex space-x-5 items-center'>
                <div className='flex items-center space-x-1'>
                  <IoBedOutline />
                  <p className='text-sm text-gray-400'>{listing.bed} bed</p>
                </div>
                <div className='flex items-center space-x-1'>
                  <GiBathtub />
                  <p className='text-sm text-gray-400'>{listing.bath} bath</p>
                </div>
                <div className='flex items-center space-x-1'>
                  <GiHomeGarage />
                  <p className='text-sm text-gray-400'>{listing.garage} gar</p>
                </div>
              </div>
              <h1 className='text-2xl font-semibold'>{listing.price}</h1>
              <div className='flex items-center space-x-2'>
                <IoLocationOutline />
                <p className='text-sm text-gray-600'>{listing.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className='text-2xl font-bold'>Featured Rentals</h1>
      <div className="deals grid 2xl:grid-cols-5 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10">
        {group2Listings.map((listing, index) => (
          <div
            key={index}
            className={`deal h-[350px] bg-white drop-shadow-2xl rounded-xl transform transition-transform hover:scale-105 ${popUpVisible ? 'pointer-events-none' : ''}`}
            onClick={() => handleListingClick(listing)}
          >
            <div className='relative h-[60%]'>
              <img src={listing.image} alt="" className='w-full h-full object-cover rounded-t-xl' />
              <div className='absolute top-0 right-0 p-4'>
                <BsSuitHeart size={"1.5rem"} className="text-white" />
              </div>
            </div>
            <div className='p-4 space-y-4'>
              <div className='flex space-x-5 items-center'>
                <div className='flex items-center space-x-1'>
                  <IoBedOutline />
                  <p className='text-sm text-gray-400'>{listing.bed} bed</p>
                </div>
                <div className='flex items-center space-x-1'>
                  <GiBathtub />
                  <p className='text-sm text-gray-400'>{listing.bath} bath</p>
                </div>
                <div className='flex items-center space-x-1'>
                  <GiHomeGarage />
                  <p className='text-sm text-gray-400'>{listing.garage} gar</p>
                </div>
              </div>
              <h1 className='text-2xl font-semibold'>{listing.price}</h1>
              <div className='flex items-center space-x-2'>
                <IoLocationOutline />
                <p className='text-sm text-gray-600'>{listing.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {popUpVisible && selectedListing && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
            onClick={handleClosePopUp}
          />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl">
            <div className='relative h-[60%]'>
              <img src={selectedListing.image} alt="" className='w-full h-full object-cover rounded-t-xl' />
              <div className='absolute top-0 right-0 p-4'>
                <BsSuitHeart size={"1.5rem"} className="text-white" />
              </div>
            </div>
            <div className='p-4 space-y-4'>
              <div className='flex space-x-5 items-center'>
                <div className='flex items-center space-x-1'>
                  <IoBedOutline />
                  <p className='text-sm text-gray-400'>{selectedListing.bed} bed</p>
                </div>
                <div className='flex items-center space-x-1'>
                  <GiBathtub />
                  <p className='text-sm text-gray-400'>{selectedListing.bath} bath</p>
                </div>
                <div className='flex items-center space-x-1'>
                  <GiHomeGarage />
                  <p className='text-sm text-gray-400'>{selectedListing.garage} gar</p>
                </div>
              </div>
              <h1 className='text-2xl font-semibold'>{selectedListing.price}</h1>
              <div className='flex items-center space-x-2'>
                <IoLocationOutline />
                <p className='text-sm text-gray-600'>{selectedListing.location}</p>
              </div>
            </div>
            <button onClick={handleClosePopUp} className="mt-4 p-2 bg-blue-500 text-white rounded-md">Close</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Listing;
