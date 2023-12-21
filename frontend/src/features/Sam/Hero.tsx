import React, { useEffect, useRef, useState } from 'react'
import heroimg from '../../assets/banner.jpg'
import "./Hero.css"
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { BsSuitHeart } from 'react-icons/bs';
import { IoBedOutline, IoLocationOutline } from 'react-icons/io5';
import { GiBathtub, GiHomeGarage } from 'react-icons/gi';
import { FaCarSide } from "react-icons/fa6";
import { ListingDocument } from '../types/Listing';
import { Link } from 'react-router-dom';
/* 
				<div className="absolute bg-[#333333] inset-0 flex justify-center items-center">
*/
type Location = "Parnell" | "NewMarket" | "Auckland" | "Wellington"
type Filter = 'Gyms' | 'Parks' | 'Supermarkets' | 'Cinemas' | 'Swimming Pools' | "Pet Friendly" | "Has Elevators" | "Furnished"

type QueryStringNames = "location" | "petFriendly" | "hasElevators" | "furnished" | "gym" | "park" | "supermarket" | "cinema" | "swimmingPool"

const queryStringToDisplayString = {
	location: "Location",
	petFriendly: "Pet Friendly",
	hasElevators: "Has Elevator",
	furnished: "Furnished",
	gym: "Gyms",
	park: "Parks",
	supermarket: "Supermarkets",
	cinema: "Cinemas",
	swimmingPool: "Swimming Pools",
}

// city, petFriendly, hasElevators, furnished, gym, park, supermarket, cinema, swimmingPool
/* 'gym', 'park', 'supermarket', 'cinema', 'swimmingPool' */
const Hero = () => {
	// ############################ Hooks ###############################
	// Location
	const [location, setLocation] = useState<Location>("Parnell")
	const [locationsIsOpened, setLocationsIsOpened] = useState<boolean>(false)
	const locationsButtonRef = useRef<HTMLDivElement>()

	// Filters
	const [filters, setFilters] = useState<QueryStringNames[]>([])
	const [filtersIsOpen, setFiltersIsOpen] = useState<boolean>(false)
	const filtersButtonRef = useRef<HTMLDivElement>()

	// Listings
	const [listings, setListings] = useState<ListingDocument[]>([])

	// ############################ Methods ###############################
	// 
	const setLocationHandler = (location: Location) => {
		console.log("Location\t", location)
		setLocation(location)
	}

	// 
	const addFilter = (newFilter: QueryStringNames) => {
		setFilters(filters => {
			const newFilters = filters.includes(newFilter) ? filters : [newFilter, ...filters]
			console.log("filters after add\t", newFilters)
			return newFilters
		})
	}

	// 
	const removeFilter = (filterToRemove: QueryStringNames) => {
		setFilters(filters => {
			const remainingFilters = filters.filter(filter => filter !== filterToRemove)
			console.log("filters after remove\t", remainingFilters)
			return remainingFilters
		})

	}

	// 
	const getProperties = () => {
		const sendRequest = async () => {
			try {

				// Create query string
				const queryString = filters.map(filter => `${filter}=1`).join().replace(/\,/g, "&")
				console.log("queryString\t", queryString)

				// Create url
				const reqUrl = `/api/listings/search?location=${location}&${queryString}`
				console.log("Sent request\t", reqUrl)

				const res = await fetch(reqUrl)
				const json = await res.json()
				console.log("json\t", json)

				setListings(json)
			} catch (err) {
				throw new Error(`${err}`)
			}
		}
		sendRequest()
	}


	// ############################ Hooks ###############################
	useEffect(() => {
		const clickHandler = (e: MouseEvent) => {
			console.log(locationsButtonRef.current)
			if (!(locationsButtonRef.current && locationsButtonRef.current.contains(e.target as Node))) setLocationsIsOpened(false)
			if (!(filtersButtonRef.current && filtersButtonRef.current.contains(e.target as Node))) setFiltersIsOpen(false)

		}

		document.addEventListener("mousedown", clickHandler)
		return () => document.removeEventListener("mousedown", clickHandler)
	}, [])



	return (
		<>
			{/* Listings Search Area */}
			<div className='relative '>
				{/* Background */}
				<img
					src={heroimg}
					alt=""
					className="w-full object-cover  h-[500px]"
				/>

				<div className="absolute bg-black bg-opacity-10 inset-0 flex justify-center items-center note-covers-image-to-allow-centering-of-insides">
					<div className="text-center bg-[#000] bg-opacity-40 flex p-6 rounded-2xl flex-col note-this-is-the-container-for-all-the-search-related-elements">{/* w-3/5  */}



						{/* SECOND ROW */}
						<div className='flex search-layer items-center justify-center'>

							{/* Location Button */}
							<div className="dropdown" ref={locationsButtonRef}>
								<div tabIndex={0} role="button" className="btn m-1  w-[200px] flex justify-between" onClick={() => setLocationsIsOpened(true)}>
									<div>{location}</div>
									<div>{locationsIsOpened ? <RiArrowDropUpLine size={25} /> : <RiArrowDropDownLine size={25} />}</div>
								</div>
								<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
									<li><a onClick={() => setLocationHandler("Parnell")}>Parnell</a></li>
									<li><a onClick={() => setLocationHandler("NewMarket")}>NewMarket</a></li>
									<li><a onClick={() => setLocationHandler("Auckland")}>Auckland</a></li>
									<li><a onClick={() => setLocationHandler("Wellington")}>Wellington</a></li>
								</ul>
							</div>

							{/* Filter Button */}
							<div className="dropdown" ref={filtersButtonRef}>
								<div tabIndex={0} role="button" className="btn m-1  w-[200px] flex justify-between" >
									<div>Select Filter</div>
									<div>{filtersIsOpen ? <RiArrowDropUpLine size={25} /> : <RiArrowDropDownLine size={25} />}</div>
								</div>
								<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
									<li><a onClick={() => addFilter("gym")}>Gyms</a></li>
									<li><a onClick={() => addFilter("park")}>Parks</a></li>
									<li><a onClick={() => addFilter("supermarket")}>Supermarkets</a></li>
									<li><a onClick={() => addFilter("cinema")}>Cinemas</a></li>
									<li><a onClick={() => addFilter("swimmingPool")}>Swimming Pools</a></li>
									<li><a onClick={() => addFilter("petFriendly")}>Pet Friendly</a></li>
									<li><a onClick={() => addFilter("hasElevators")}>Has Elevators</a></li>
									<li><a onClick={() => addFilter("furnished")}>Furnished</a></li>
								</ul>
							</div>

							<button className="btn btn-active btn-primary" onClick={() => getProperties()}>Search</button>
						</div>


						{/* THRID ROW */}
						<div className='flex flex-wrap'> {/*  bg-[#500] */}
							{
								filters.map(filter => (
									<span className="badge m-1 cursor-pointer" key={filter} onClick={() => removeFilter(filter)}>{queryStringToDisplayString[filter]} <span className='relative top-0.5 pl-1'><RxCross1 size={8} /></span></span>
								))
							}
						</div>
					</div>
				</div>
			</div>
			{/* 
			import { BsSuitHeart } from 'react-icons/bs';
import { IoBedOutline, IoLocationOutline } from 'react-icons/io5';
import { GiBathtub, GiHomeGarage } from 'react-icons/gi';
 */}

			{/* Listings View */}
			<div className='bg-lime-600 w-full p-12'>
				<h1 className='text-5xl bg-violet-700 text-center'>Rentals in {location}</h1>
				<p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde harum cum voluptates velit nihil pariatur magnam hic impedit et, neque laborum aspernatur reiciendis aliquam ipsam repellat omnis. Illum, laborum obcaecati.</p>


				{/* <div key={"as"+listing._id}>
								<h1>testing!</h1>
								<img key={listing._id} src={listing.propertyImages[0]} alt="Shoes" />
							</div> */}
				{/* Card Container */}
				<div className="flex flex-wrap">
					{listings.map(listing => {

						const truncateDescription = (description: string, maxWords: number) => {
							const words = description.split(' ');
							if (words.length > maxWords) {
								return words.slice(0, maxWords).join(' ') + '...';
							}
							return description;
						};

						return (
							<div className="card w-[24rem] bg-base-100 rounded-none m-4" key={listing._id}>
								{/* Card */}
								<Link to={listing._id}>
									<figure className='relative'>
										<img src={listing.propertyImages[0]} alt="Shoes" />
										<div className='absolute top-4 right-4'><BsSuitHeart /></div>
									</figure>
									<div className="card-body p-4 pb-6">
										<div className='flex items-baseline place-content-between pb-4'>
											<div className='flex items-center'>
												<div className='flex items-center pr-3'>
													<div className='pr-1'><IoBedOutline /></div>{listing.bedrooms}
												</div>
												<div className='flex items-center pr-3'>
													<div className='pr-1'><GiBathtub /></div>{listing.bathrooms}
												</div>
												<div className='flex items-center pr-3'>
													<div className='pr-1'><FaCarSide /></div>{listing.garages}
												</div>
											</div>

											<div className='relative'>
												<h2 className="card-title text-4xl">${listing.price}.00</h2>
												<span className='text-sm absolute top-8 right-0'>per week</span>
											</div>
										</div>

										<p>{truncateDescription(listing.description, 20)}</p>
									</div>
								</Link>
							</div>


						)
					})}
				</div>




			</div>
		</>
	);
};

export default Hero