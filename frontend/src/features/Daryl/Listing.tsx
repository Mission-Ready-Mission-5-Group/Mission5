import React from 'react'
import {BsSuitHeart} from 'react-icons/bs'
import {IoBedOutline,IoLocationOutline} from 'react-icons/io5'
import {GiBathtub,GiHomeGarage} from 'react-icons/gi'
import house2 from '../../assets/houses/house2.jpg'
import house3 from '../../assets/houses/house3.jpg'
import house4 from '../../assets/houses/house4.jpg'
import house5 from '../../assets/houses/house5.jpg'
import house6 from '../../assets/houses/house6.jpg'
import house7 from '../../assets/houses/house7.jpg'
import house8 from '../../assets/houses/house8.jpg'

const Listing = () => {
  return (
    <div className='py-10'>
        <h1 className='text-2xl font-bold'>Featured Rentals under $700 in Auckland</h1>
        <div className="deals grid 2xl:grid-cols-5 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10">
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
                <h1 className='text-2xl font-semibold'>$565</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>Henderson, Auckland</p>
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
                <h1 className='text-2xl font-semibold'>$620</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>Newmarket, Auckland</p>
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
                <h1 className='text-2xl font-semibold'>$500</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>Glenbrook, Waikato</p>
                </div>
                </div>

            </div>
            <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div className='relative h-[60%]'>
                <img src={house5} alt="" className='w-full h-full object-cover rounded-t-xl'/>
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
                <h1 className='text-2xl font-semibold'>$576</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>Ohaupo, Wellington</p>
                </div>
                </div>

            </div>
        </div>

        <h1 className='text-2xl font-bold'>Featured Rentals under $700 in Auckland</h1>
        <div className="deals grid 2xl:grid-cols-5 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10">
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
                <h1 className='text-2xl font-semibold'>$537</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>Auckland CBD</p>
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
                <h1 className='text-2xl font-semibold'>$567</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>Papakura, Auckland</p>
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
                <h1 className='text-2xl font-semibold'>$645</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>Papakura, Auckland</p>
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
                <h1 className='text-2xl font-semibold'>$656</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>Hampton Downs, Waikato</p>
                </div>
                </div>

            </div>


          
        </div>

        <div className='w-full flex justify-center py-5'>
        </div>
    </div>
  )
}

export default Listing