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
import house9 from '../../assets/houses/house9.jpg';

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
    { image: house2, bed: '5', bath: '3', garage: '3', price: '$565', location: 'Henderson, Auckland' },
    { image: house3, bed: '5', bath: '3', garage: '1', price: '$620', location: 'Newmarket, Auckland' },
    { image: house4, bed: '5', bath: '3', garage: '2', price: '$500', location: 'Glenbrook, Waikato' },
    { image: house5, bed: '5', bath: '3', garage: '3', price: '$576', location: 'Ohaupo, Wellington' },
    { image: house6, bed: '5', bath: '3', garage: '1', price: 'By Negotiation', location: 'Auckland CBD' },
    { image: house7, bed: '5', bath: '3', garage: '2', price: 'By Negotiation', location: 'Papakura, Auckland' },
    { image: house8, bed: '5', bath: '3', garage: '1', price: 'By Negotiation', location: 'Papakura, Auckland' },
    { image: house9, bed: '3', bath: '2', garage: '2', price: 'By Negotiation', location: 'Hampton Downs, Waikato' },
  ];

  const group1Listings = listings.slice(0, 4); // First 4 listings
  const group2Listings = listings.slice(4);   // Remaining listings

  return (
    <div className='py-10'>
        <p className='px-4 py-1 text-xs bg-yellow-100 w-16 rounded-lg'>NEW</p>
        <h1 className='text-4xl font-bold'>NEWEST DEALS</h1>
        <div className="deals grid 2xl:grid-cols-5 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10">
            <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div className='relative h-[60%]'>
                <img src={house1} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                <div className='absolute top-0 right-0 p-4'>
                    <BsSuitHeart size={"1.5rem"} className="text-white"/>
                </div>
                </div>
                <div className='p-4 space-y-4'>
                <div className='flex space-x-5 items-center'>
                    <div className='flex items-center space-x-1'>
                        <IoBedOutline/>
                        <p className='text-sm text-gray-400'>5 bed</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                       <GiBathtub/>
                       <p className='text-sm text-gray-400'>3 bat</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                     <GiHomeGarage/>
                        <p className='text-sm text-gray-400'>1 gar</p>
                    </div>
                </div>
                <h1 className='text-2xl font-semibold'>$110,000</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>Kissimmee.Florida US</p>
                </div>
                </div>

            </div>
            <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div className='relative h-[60%]'>
                <img src={house2} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                <div className='absolute top-0 right-0 p-4'>
                    <BsSuitHeart size={"1.5rem"} className="text-white"/>
                </div>
                </div>
                <div className='p-4 space-y-4'>
                <div className='flex space-x-5 items-center'>
                    <div className='flex items-center space-x-1'>
                        <IoBedOutline/>
                        <p className='text-sm text-gray-400'>5 bed</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                       <GiBathtub/>
                       <p className='text-sm text-gray-400'>3 bat</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                     <GiHomeGarage/>
                        <p className='text-sm text-gray-400'>1 gar</p>
                    </div>
                </div>
                <h1 className='text-2xl font-semibold'>$70,000</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>Petra,Spain</p>
                </div>
                </div>

            </div>
            <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div className='relative h-[60%]'>
                <img src={house3} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                <div className='absolute top-0 right-0 p-4'>
                    <BsSuitHeart size={"1.5rem"} className="text-white"/>
                </div>
                </div>
                <div className='p-4 space-y-4'>
                <div className='flex space-x-5 items-center'>
                    <div className='flex items-center space-x-1'>
                        <IoBedOutline/>
                        <p className='text-sm text-gray-400'>5 bed</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                       <GiBathtub/>
                       <p className='text-sm text-gray-400'>3 bat</p>
                    </div>
                  
                </div>
                <h1 className='text-2xl font-semibold'>$42,000</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>Ia Molas,Italy</p>
                </div>
                </div>

            </div>
            <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div className='relative h-[60%]'>
                <img src={house4} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                <div className='absolute top-0 right-0 p-4'>
                    <BsSuitHeart size={"1.5rem"} className="text-white"/>
                </div>
                </div>
                <div className='p-4 space-y-4'>
                <div className='flex space-x-5 items-center'>
                    <div className='flex items-center space-x-1'>
                        <IoBedOutline/>
                        <p className='text-sm text-gray-400'>5 bed</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                       <GiBathtub/>
                       <p className='text-sm text-gray-400'>3 bat</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                     <GiHomeGarage/>
                        <p className='text-sm text-gray-400'>1 gar</p>
                    </div>
                </div>
                <h1 className='text-2xl font-semibold'>$80,000</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>San Francisco,Colombia</p>
                </div>
                <div className='flex items-center space-x-1'>
                  <GiHomeGarage />
                  <p className='text-sm text-gray-400'>{listing.garage} gar</p>
                </div>
                </div>
                <div className='p-4 space-y-4'>
                <div className='flex space-x-5 items-center'>
                    <div className='flex items-center space-x-1'>
                        <IoBedOutline/>
                        <p className='text-sm text-gray-400'>5 bed</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                       <GiBathtub/>
                       <p className='text-sm text-gray-400'>3 bat</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                     <GiHomeGarage/>
                        <p className='text-sm text-gray-400'>1 gar</p>
                    </div>
                </div>
                <h1 className='text-2xl font-semibold'>59,000</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>VN, Vietnam</p>
                </div>
                </div>

            </div>
            <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div className='relative h-[60%]'>
                <img src={house6} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                <div className='absolute top-0 right-0 p-4'>
                    <BsSuitHeart size={"1.5rem"} className="text-white"/>
                </div>
                </div>
                <div className='p-4 space-y-4'>
                <div className='flex space-x-5 items-center'>
                    <div className='flex items-center space-x-1'>
                        <IoBedOutline/>
                        <p className='text-sm text-gray-400'>5 bed</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                       <GiBathtub/>
                       <p className='text-sm text-gray-400'>3 bat</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                     <GiHomeGarage/>
                        <p className='text-sm text-gray-400'>1 gar</p>
                    </div>
                </div>
                <h1 className='text-2xl font-semibold'>$42,000</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>Wiesentheid, Germany</p>
                </div>
                </div>

            </div>
            <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div className='relative h-[60%]'>
                <img src={house7} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                <div className='absolute top-0 right-0 p-4'>
                    <BsSuitHeart size={"1.5rem"} className="text-white"/>
                </div>
                </div>
                <div className='p-4 space-y-4'>
                <div className='flex space-x-5 items-center'>
                    <div className='flex items-center space-x-1'>
                        <IoBedOutline/>
                        <p className='text-sm text-gray-400'>5 bed</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                       <GiBathtub/>
                       <p className='text-sm text-gray-400'>3 bat</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                     <GiHomeGarage/>
                        <p className='text-sm text-gray-400'>1 gar</p>
                    </div>
                </div>
                <h1 className='text-2xl font-semibold'>$132,000</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>Tambon Bang Sa-re, Thailand</p>
                </div>
                </div>

            </div>
            <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div className='relative h-[60%]'>
                <img src={house8} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                <div className='absolute top-0 right-0 p-4'>
                    <BsSuitHeart size={"1.5rem"} className="text-white"/>
                </div>
                </div>
                <div className='p-4 space-y-4'>
                <div className='flex space-x-5 items-center'>
                    <div className='flex items-center space-x-1'>
                        <IoBedOutline/>
                        <p className='text-sm text-gray-400'>5 bed</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                       <GiBathtub/>
                       <p className='text-sm text-gray-400'>3 bat</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                     <GiHomeGarage/>
                        <p className='text-sm text-gray-400'>1 gar</p>
                    </div>
                </div>
                <h1 className='text-2xl font-semibold'>$58,000</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>Vuren, Netherlands</p>
                </div>
                </div>

            </div>
            <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div className='relative h-[60%]'>
                <img src={house4} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                <div className='absolute top-0 right-0 p-4'>
                    <BsSuitHeart size={"1.5rem"} className="text-white"/>
                </div>
                </div>
                <div className='p-4 space-y-4'>
                <div className='flex space-x-5 items-center'>
                    <div className='flex items-center space-x-1'>
                        <IoBedOutline/>
                        <p className='text-sm text-gray-400'>3 bed</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                       <GiBathtub/>
                       <p className='text-sm text-gray-400'>2 bat</p>
                    </div>
                 
                </div>
                <h1 className='text-2xl font-semibold'>$120,000</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>New York, United States</p>
                </div>
                </div>

            </div>
            <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div className='relative h-[60%]'>
                <img src={house9} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                <div className='absolute top-0 right-0 p-4'>
                    <BsSuitHeart size={"1.5rem"} className="text-white"/>
                </div>
                </div>
                <div className='p-4 space-y-4'>
                <div className='flex space-x-5 items-center'>
                    <div className='flex items-center space-x-1'>
                        <IoBedOutline/>
                        <p className='text-sm text-gray-400'>4 bed</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                       <GiBathtub/>
                       <p className='text-sm text-gray-400'>2 bat</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                     <GiHomeGarage/>
                        <p className='text-sm text-gray-400'>1 gar</p>
                    </div>
                </div>
                <h1 className='text-2xl font-semibold'>$98,000</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>Port-au-Prince,, Haiti</p>
                </div>
                </div>

            </div>
        </div>
        <div className='w-full flex justify-center py-5'>
        <button className='bg-yellow-200 px-5 py-2 rounded-md text-xl flex items-center space-x-2'><span>View More</span> <AiOutlineDoubleRight/></button>
        </div>
    </div>
  );
};

export default Listing;